'use strict';

dezboapp.controller('donorCtrl', ['$scope', '$modal',
  function ($scope, $modal) {
    $scope.donoritems = [{
        imageURL: 'img/product/ellenThankYou.png',
        donorTitle: "Contributor",
        donationAmount: "$10",
        donationInt: 1000,
        ending: "Dec 05, 2014",
        prizes: "20 Entries"
      },
      {
        imageURL: 'img/product/ellen20.png',
        donorTitle: "Donor",
        donationAmount: "$20",
        donationInt: 2000,
        ending: "Dec 22, 2014",
        prizes: "40 Entries, thank you e-card"
      },
      {
        imageURL: 'img/product/ellen50.png',
        donorTitle: "Helper",
        donationAmount: "$50",
        donationInt: 5000,
        ending: "Dec 15, 2014",
        prizes: "100 Entries, t-shirt"
      },
      {
        imageURL: 'img/product/ellen100.png',
        donorTitle: "Do-Gooder",
        donationAmount: "$100",
        donationInt: 10000,
        ending: "Dec 10, 2014",
        prizes: "200 Entries, recorded thank you video"
      },
      {
        imageURL: 'img/product/ellen200.png',
        donorTitle: "Booster",
        donationAmount: "$200",
        donationInt: 20000,
        ending: "Dec 11, 2014",
        prizes: "400 Entries, hoodie"
      },
      {
        imageURL: 'img/product/ellen500.png',
        donorTitle: "Hustler",
        donationAmount: "$500",
        donationInt: 50000,
        ending: "Dec 11, 2014",
        prizes: "1,000 Entries, personal autographed poster"
      },
      {
        imageURL: 'img/product/ellen1000.png',
        donorTitle: "Angel",
        donationAmount: "$1,000",
        donationInt: 100000,
        ending: "Dec 15, 2014",
        prizes: "2,000 Entries, personal autographed mug"
      },
      {
        imageURL: 'img/product/ellen5000.png',
        donorTitle: "Baller",
        donationAmount: "$5,000",
        donationInt: 500000,
        ending: "Dec 19, 2014",
        prizes: "10,000 Entries, 2-minute call"
      },
      {
        imageURL: 'img/product/ellen10000.png',
        donorTitle: "Boss",
        donationAmount: "$10,000",
        donationInt: 1000000,
        ending: "Dec 28, 2014",
        prizes: "20,000 Entries, 5-minute Skype call"
      },
      {
        imageURL: 'img/product/ellen25000.png',
        donorTitle: "Legend",
        donationAmount: "$25,000",
        donationInt: 2500000,
        ending: "Jan 5, 2015",
        prizes: "2,000 Entries, break- fast/lunch/dinner with Ellen"
      }
    ];

    $scope.donateAmount = function(amount, item) {
      var token = function(res){
        var $input = $('<input type=hidden name=stripeToken />').val(res.id);
        $('form').append($input).submit();
      };
      StripeCheckout.open({
        key:         'pk_test_V9KoJMZboWIvd2ikQUHGWMUA',
        address:     true,
        amount:      amount,
        currency:    'usd',
        name:        'Dezbo',
        description: item,
        panelLabel:  'Checkout',
        token:       token,
        image:       'img/logo_o.png'
      });
      return false;
    };
  }
]);
