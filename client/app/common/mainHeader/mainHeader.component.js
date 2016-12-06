import template from './mainHeader.component.html';
import controller from './mainHeader.controller';
import './mainHeader.scss';

let mainHeaderComponent = {
  restrict: 'E',
  bindings: {},
  transclude: {},
  template,
  controller
};

export default mainHeaderComponent;
