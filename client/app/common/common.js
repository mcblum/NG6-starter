import angular from 'angular';

// components
import mainHeader from './mainHeader/mainHeader.component';
import mainFooter from './mainFooter/mainFooter.component';

import './common.scss';

let commonModule = angular.module('app.common', [

])
    .component('mainHeader', mainHeader)
    .component('mainFooter', mainFooter)

    .name;

export default commonModule;
