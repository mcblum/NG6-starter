import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './<%= name %>.scss';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
]).config(($stateProvider) => {
      "ngInject";
      $stateProvider
          // .state('', {
          //   url: '/',
          //   component: ''
          // })

    })
    .name;

export default <%= name %>Module;
