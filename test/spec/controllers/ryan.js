'use strict';

describe('Controller: RyanCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanProjectApp'));

  var RyanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RyanCtrl = $controller('RyanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RyanCtrl.awesomeThings.length).toBe(3);
  });
});
