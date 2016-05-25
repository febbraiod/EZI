var AdminNav = {
  template: [
      '<div>',
      '<a href="#" ui-sref="admin">Inventory Calendar</a><br>',
      '<a href="#" ui-sref="admin.users">Staff Management</a><br>',
      '<a href="#" ui-sref="admin.analytics">Analylics</a><br>',
      '<a href="#" ui-sref="admin.swaps">Swaps</a><br>',
      '<a href="#" ui-sref="admin.import">Update Inventory</a><br>',
      '<a href="#" ui-sref="inventory">Main Inventory</a><br>',
      '<a href="#" ui-sref="inventory.delivered">Delivery History</a><br>',
      '<a href="#">Sign out(not sure how this works yet)</a>',
      '</div>'
    ].join(''),
};

angular
  .module('app')
  .component('adminNav', AdminNav);