var tabs = {
    transclude: true,
    template: [
    '<div class="tabs">',
      '<ul class ="tabs__list">',
        '<li ng-repeat="tab in $ctrl.tabs" ng-click="$ctrl.selectTab($index);"><a>{{tab.label}}</a></li>',
      '</ul>',
      '<ng-transclude></ng-transclude>',//this means whatever already exists
                                        //in the DOM where this directive or component
                                        //is being inserted put it here
    '</div>'].join(''),
    controller: function($scope){
      this.tabs = [];

      this.addTab = function(tab){
        tab.selected = this.tabs.length === 0 ? true : false;
        this.tabs.push(tab);
      };

      this.selectTab = function(index){
        for(var i = 0; i < this.tabs.length ; i++){
          this.tabs[i].selected = false;
        }
        this.tabs[index].selected = true;
      };
    }
};

angular
  .module('app')
  .component('tabs', tabs);

// As with tab, I can definately follow this and probably even explain it 
// I was able to do it in the labs as well
// however i dont think i could do it from scratch 
// i.e. without the lesson in front of me and experts to answer 
// questions and a solution to follow if need be
// should i be worried about that?