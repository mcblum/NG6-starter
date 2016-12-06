import template from './<%= name %>.component.html';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

let <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  transclude: {},
  template,
  controller
};

export default <%= name %>Component;
