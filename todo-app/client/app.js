/**
 * Created by LuisGuillermo on 5/30/2015.
 */
'use strict';
angular.module('TodoApp', ['ngRoute', 'ngMessages'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/todo.html',
                controller: 'TodoCtrl'
            })
            .otherwise('/');
    })
;