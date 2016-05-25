var VehicleCard = {
  // i will def need to add bindings for status and status user 
  // and probably picture but i haven't figure that out yet
  bindings: {
      year: '=',
      make: '=',
      model: '=',
      color: '=',
      msrp: '=',
      stock: '=',
      vin: '='
    },
  template: [
  "<div class='card_left'>",
    "<div class='card_header'>",
      "<h4>{{ctrl.year}} {{ctrl.make}} {{ctrl.model}}</h4> ",
    "<h5>{{ctrl.color}}</h5>",
  "</div>",
  "<div class='car_picture'>",
    "i'm a picture<!-- last uploaded vehicle pic goes here or if there isn't one we need a place holder -->",
  "</div>",
  "<div>",
    "<p>MSRP: {{ctrl.msrp}}</p>",
    "<p>Stock Number: {{ctrl.stock}}</p>",
    "<p>Vin: {{ctrl.vin}}</p>",
  "</div>",
"</div>",

"<div class='card_right'>",
  "<p>Status: {{ctrl.status}}</p>",
  "<p>Status applied by: {{ctrl.status.user.name}}</p>",
"</div>"
    ].join(''),
  controllerAs: 'ctrl'
  // not sure how the data will be nested yet so i guessed
  // also might need to change the 'vehicle' in controller to ctrl
  // depending on whats going on in the view.
};

angular
  .module('app')
  .component('vehicleCard', VehicleCard);