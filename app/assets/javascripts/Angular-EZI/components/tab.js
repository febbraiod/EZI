var tab = {
  transclude: true,
  bindings: { label: '@' },
  require: { tabs: '^tabs' },
  template:[
    '<div class="tabs__content" ng-if="$ctrl.selected">',
      '<ng-transclude></ng-transclude>',
    '</div>'
    ].join(''),
  controller: function($scope){
    thisTab = this;
    this.$onInit = function(){
      this.tabs.addTab(thisTab);
    };
  }

};

angular
  .module('app')
  .component('tab', tab);

// I can definately follow this and probably even explain it 
// I was able to do it in the labs as well
// however i dont think i could do it from scratch 
// i.e. without the lesson in front of me and experts to answer 
// questions and a solution to follow if need be
// should i be worried about that?