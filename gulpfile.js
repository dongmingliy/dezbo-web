'use strict';

// Install: you must install gulp both globally *and* locally.
// Make sure you `$ npm install -g gulp`

/**
 * Dependencies
 */


var $ = require('gulp-load-plugins')({ lazy: true });
var pagespeed = require('psi');
var gulp = require('gulp');
var pngcrush = require('imagemin-pngcrush');
var terminus = require('terminus');
var runSequence = require('run-sequence');
var rev = require('gulp-rev');

/**
 * Banner
 */

var pkg = require('./package.json');
var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.licenses[0].type %>',
  ' */',
  ''
].join('\n');

/**
 * Paths
 */

var paths = {
  clean: [
    '!public/js/main.js',            // ! not
    '!public/js/socket.io-1.0.6.js', // ! not
    'public/js/**/*.js',
    'public/js/**/*.map',
    'public/js/**/*.min.js',
    'public/css/**/*.css',
    'public/css/**/*.min.css'
  ],
  js: [
    // =========================================
    'client/js/main.js',
    'client/controller/*.js',
    'client/directive/*.js',
    'public/lib/angular-timer/dist/angular-timer.min.js',
    'public/lib/fastclick/lib/fastclick.js',
    'public/lib/flex-slider/jquery.flexslider.js',
    'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'public/lib/liscroll/liscroll.js',
  ],
  lint: [
    'server/config/**/*.js',
    'test/**/*.js',
    'server/controllers/**/*.js',
    'server/models/**/*.js',
    'app.js',
    'app_cluster.js',
    'gulpfile.js'
  ],
  less: [
    'client/less/**/*.less',
    'public/lib/bootstrap-social/bootstrap-social'
  ],
  css: [
    'client/less/*.less'
  ]
};

/**
 * Clean
 */

// Return the stream so that gulp knows the task is asynchronous
// and waits for it to terminate before starting dependent tasks.

gulp.task('clean', function () {
  return gulp.src(paths.clean, { read: false })
      .pipe($.rimraf());
});

/**
 * Process CSS
 */
//
// no minification, separate files
gulp.task('styles', function () {
  return gulp.src(paths.less)               // Read in Less file
    .pipe($.less({ strictMath: true }))     // Compile Less files
    .pipe($.autoprefixer([                  // Autoprefix for target browsers
      'last 2 versions',
      '> 1%',
      'Firefox ESR',
      'Opera 12.1'
    ], { cascade: true }))
//    .pipe($.csscomb())                      // Coding style formatter for CSS
//    .pipe($.csslint('.csslintrc'))          // Lint CSS
//    .pipe($.csslint.reporter())             // Report issues
    .pipe(gulp.dest('./public/css'))        // Save CSS here
//    .pipe($.csso())                         // Minify CSS
//    .pipe($.size({ title: 'CSS:' }))        // What size are we at?
    .pipe(gulp.dest('./public/css'))        // Save minified CSS
    .pipe($.livereload());                  // Initiate a reload
});


// production
gulp.task('stylesprod', function () {
  return gulp.src('./client/less/production.less')       // Read in Less file
    .pipe($.less({ strictMath: true }))     // Compile Less files
    .pipe($.autoprefixer([                  // Autoprefix for target browsers
      'last 2 versions',
      '> 1%',
      'Firefox ESR',
      'Opera 12.1'
    ], { cascade: true }))
    .pipe(gulp.dest('./public/css'))        // Save CSS here
    .pipe($.rename(pkg.name + 'min'))       // Add min (cannot use . in the name in config.js)
    .pipe($.csso())                         // Minify CSS
    .pipe($.header(banner, { pkg: pkg }))   // Add banner
    .pipe($.size({ title: 'CSS:' }))        // What size are we at?
    .pipe($.rename({ suffix: '.css' }))     // Add .css suffix
    .pipe(gulp.dest('./public/css'))        // Save minified CSS
    .pipe($.rename(pkg.name + 'min'))       // Rename
    .pipe(rev())                            // Append hash to file main-098f6bcd.css
    .pipe($.rename({ suffix: '.css' }))     // Add .css suffix
    .pipe(gulp.dest('./public/css'))        // Save to something like dezbo-min-cb5af184.css
    .pipe(rev.manifest())
    .pipe(gulp.dest('./'));                 // write manifest to build dir

});

/**
 * Process Scripts
 */

gulp.task('scripts', function () {
  return gulp.src(paths.js)                   // Read .js files
    .pipe($.concat(pkg.name + '.js'))       // Concatenate .js files
    .pipe(gulp.dest('./public/js'))
    .pipe($.rename({ suffix: '.min' }))     // Add .min suffix
    .pipe($.uglify()) // Minify the .js
    .pipe($.header(banner, { pkg: pkg }))   // Add banner
    .pipe($.size({ title: 'JS:' }))         // What size are we at?
    .pipe(gulp.dest('./public/js'))         // Save minified .js
    .pipe($.livereload());                  // Initiate a reload
});

/**
 * Process Images
 */

gulp.task('images', function () {
  return gulp.src('client/img/**/*')            // Read images
    .pipe($.changed('./public/img/'))
    .pipe($.imagemin({                          // Compress images
      progressive: true,
      optimizationLevel: 3,
      interlaced: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('./public/img'));          // Write processed images
});

/**
 * JSHint Files
 */

gulp.task('lint', function () {
  return gulp.src(paths.lint)                 // Read .js files
      .pipe($.jshint())                       // lint .js files
      .pipe($.jshint.reporter('jshint-stylish'));
});

/**
 * JSCS Files
 */

gulp.task('jscs', function () {
  return gulp.src(paths.lint)               // Read .js files
      .pipe($.jscs())                         // jscs .js files
      .on('error', function (e) {
        $.util.log(e.message);
        $.jscs().end();
      })
      .pipe(terminus.devnull({ objectMode: true }));
});
// add stylesprod for production build
gulp.task('build', function (cb) {
  runSequence(
      'clean',                                // first clean
      ['lint', 'jscs'],                       // then lint and jscs in parallel
      // ['styles', 'stylesprod', 'scripts', 'images'],        // etc.
      ['styles', 'scripts', 'images'],        // etc.
      cb);
});

/**
 * Nodemon Task
 */

gulp.task('nodemon', ['build'], function (cb) {
  $.livereload.listen();
  var called = false;
  $.nodemon({
    script: 'app.js',
    verbose: false,
    env: { 'NODE_ENV': 'development', 'DEBUG': 'skeleton' },
    nodeArgs: ['--debug'],
    ext: 'js',
    ignore: [
      'gulpfile.js',
      'public/',
      'node_modules/'
    ]
  })
      .on('start', function () {
        setTimeout(function () {
          if (!called) {
            called = true;
            cb();
          }
        }, 500);  // wait for start
      })
      .on('restart', function () {
        setTimeout(function () {
          $.livereload.changed('/');
        }, 500);  // wait for restart
      });
});

/**
 * Open the browser
 */

gulp.task('open', ['nodemon'], function () {
  var options = {
    url: 'http://localhost:3000/'
  };
  // A file must be specified or gulp will skip the task
  // Doesn't matter which file since we set the URL above
  // Weird, I know...
  gulp.src('./public/humans.txt')
      .pipe($.open('', options));
});

/**
 * Default Task
 */

gulp.task('default', ['open'], function () {
  gulp.watch(paths.less, ['styles']);
  gulp.watch(paths.css, ['styles']);
  gulp.watch(paths.js, ['scripts']);
  gulp.watch(paths.lint, ['lint', 'jscs']);
  gulp.watch('client/views/**/*.jade').on('change', $.livereload.changed);
});

/**
 * Run PageSpeed Insights
 */

// By default, we use the PageSpeed Insights
// free (no API key) tier. You can use a Google
// Developer API key if you have one. See
// http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'

gulp.task('pagespeed', pagespeed.bind(null, {
  url: 'http://www.dezbo.com',
  strategy: 'desktop'
}));

