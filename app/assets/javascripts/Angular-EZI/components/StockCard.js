var StockCard = {
  // i will def need to add bindings for status and status user 
  // and probably picture but i haven't figure that out yet
  bindings: {
      year: '=',
      make: '=',
      model: '=',
      color: '=',
      msrp: '=',
      stock: '=',
      vin: '=',
      id: '=',
      neworused: '=',
      odometer: '=',
      options: '=',
      dealerprice: '='
    },
  template: [
  "<div class = 'vehicle_card'>", //id='test_drive' notes='will add to class based on status then i can get rid of the id here'
    "<div class='card_section'>",
    "<div class='card_header'>",
      "<h4>{{ctrl.year}} {{ctrl.make}} {{ctrl.model}}</h4> ",
      "<h5>{{ctrl.color}}</h5>",
    "</div>",
      "<div class='car_picture'>",
        "<p>i'm a picture</p>",
        // <!-- last uploaded vehicle pic goes here or if there isn't one we need a place holder -->",
      "</div>",
      "<p>MSRP: ${{ctrl.msrp}} / Asking: ${{ctrl.dealerprice}}</p>",
      "<p>Vin: {{ctrl.vin}}</p>",
      // eventually i'd like the url to use :stock_no rather than :id
      "<p>Stock Number: <a href='#/vehicle/{{ctrl.id}}'>{{ctrl.stock}}</a></p>",
    "</div>",
    "<div class='card_section'>",
      "<p>ownership: {{ctrl.neworused}}</p>",
      "<p>odometer: {{ctrl.odometer}}</p>",
      "<p>Status: {{ctrl.status}}</p>",
      "<p>Status applied by: {{ctrl.status.user.name}}</p>",
    "</div>",
    "<div class='card_section'>",
      "<p>Options(abv): {{ctrl.options}}</p>",
    "</div>",
  "</div>"
    ].join(''),
  controllerAs: 'ctrl'
  // not sure how the data will be nested yet so i guessed
  // also might need to change the 'vehicle' in controller to ctrl
  // depending on whats going on in the view.
};

angular
  .module('app')
  .component('stockCard', StockCard);