import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import './common/scss/abstract.scss';
import './common/scss/normalize.scss';

import './app.scss';

angular.module('app', [
    uiRouter,
    Common,
    Components
])
    .config(($locationProvider) => {
        "ngInject";

        $locationProvider.html5Mode(true).hashPrefix('!');

    })
    .component('app', AppComponent);
