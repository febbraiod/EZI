var VehicleCard = {
  template: [
  "<div class='card_left'>",
    "<div class='card_header'>",
      "<h4>{{vehicle.year}} {{vehicle.make}} {{vehicle.model}}</h4>",
    "<h5>{{vehicle.color}}</h5>",
  "</div>",
  "<div class='car_picture'>",
    "i'm a picture<!-- last uploaded vehicle pic goes here or if there isn't one we need a place holder -->",
  "</div>",
  "<div>",
    "<p>MSRP: {{vehicle.msrp}}</p>",
    "<p>Stock Number: {{vehicle.stock_no}} %></p>",
    "<p>Vin: <%= vehicle.VIN %></p>",
  "</div>",
"</div>",

"<div class='card_right'>",
  "<p>Status: {{vehicle.status}}</p>",
  "<p>Status applied by: {{vehicle.status.user.name}}</p>",
"</div>"
    ].join(''),
  controllerAs: 'vehicle'
  // not sure how the data will be nested yet so i guessed
  // also might need to change the 'vehicle' in controller to ctrl
  // depending on whats going on in the view.
};

angular
  .module('app')
  .component('vehicleCard', VehicleCard);