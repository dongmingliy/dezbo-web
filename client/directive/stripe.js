dezboapp.directive('ngSparkline', function() {
  return {
    restrict: 'A',
    replace: true,
    link: function(scope, element) {
      element.bind('click',function(e) {
        // Open Checkout with further options
        handler.open({
          name: "Dezbo",
          description: "Raffle Ticket",
          currency: "USD",
          panelLabel: "Payer",
          amount: scope.amount
        });
        e.preventDefault();
      });
    }
  };
});