'use strict';

dezboapp.controller('donorCtrl', ['$scope', '$modal',
  function ($scope, $modal) {
    $scope.donoritems = [{
        imageURL: 'img/product/ellenThankYou.png',
        donorTitle: "Contributor",
        donationAmount: "$10",
        prizes: "20 Entries"
      },
      {
        imageURL: 'img/product/ellenThankYou.png',
        donorTitle: "Donor",
        donationAmount: "$20",
        prizes: "40 Entries, thank you e-card"
      },
      {
        imageURL: 'img/product/ellen50.png',
        donorTitle: "Helper",
        donationAmount: "$50",
        prizes: "100 Entries, t-shirt"
      },
      {
        imageURL: 'img/product/ellen100.png',
        donorTitle: "Do-Gooder",
        donationAmount: "$100",
        prizes: "200 Entries, recorded thank you video"
      },
      {
        imageURL: 'img/product/ellen200.png',
        donorTitle: "Booster",
        donationAmount: "$200",
        prizes: "400 Entries, hoodie"
      },
      {
        imageURL: 'img/product/ellen500.png',
        donorTitle: "Hustler",
        donationAmount: "$500",
        prizes: "1,000 Entries, personal autographed poster"
      },
      {
        imageURL: 'img/product/ellen1000.png',
        donorTitle: "Angel",
        donationAmount: "$1,000",
        prizes: "2,000 Entries, personal autographed mug"
      },
      {
        imageURL: 'img/product/ellen5000.png',
        donorTitle: "Baller",
        donationAmount: "$5,000",
        prizes: "10,000 Entries, 2-minute call"
      },
      {
        imageURL: 'img/product/ellen10000.png',
        donorTitle: "Boss",
        donationAmount: "$10,000",
        prizes: "20,000 Entries, 5-minute Skype call"
      },
      {
        imageURL: 'img/product/ellen25000.png',
        donorTitle: "Legend",
        donationAmount: "$25,000",
        prizes: "2,000 Entries, break- fast/lunch/dinner with Ellen"
      }
    ];
  }
]);
