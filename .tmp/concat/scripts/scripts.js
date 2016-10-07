'use strict';

/**
 * @ngdoc overview
 * @name yeomanProjectApp
 * @description
 * # yeomanProjectApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ryan', {
        templateUrl: 'views/ryan.html',
        controller: 'RyanCtrl',
        controllerAs: 'ryan'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanProjectApp
 */
angular.module('yeomanProjectApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name yeomanProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanProjectApp
 */
angular.module('yeomanProjectApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name yeomanProjectApp.controller:RyanCtrl
 * @description
 * # RyanCtrl
 * Controller of the yeomanProjectApp
 */
angular.module('yeomanProjectApp')
  .controller('RyanCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('yeomanProjectApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>'Allo, 'Allo!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> Always a pleasure scaffolding your apps. </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );


  $templateCache.put('views/ryan.html',
    "<h1>Ryan Doiron</h1> <p>This is the ryan view.</p>"
  );

}]);
