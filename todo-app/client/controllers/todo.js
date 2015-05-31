/**
 * Created by LuisGuillermo on 5/30/2015.
 */
'use strict';
angular.module('TodoApp')
    .controller('TodoCtrl', ['$scope', 'TodoService', function($scope, todoService) {
        /**
         * The todo list
         */
        $scope.todos = todoService.get();

        /**
         * Add a todo item
         * @param todo
         */
        $scope.add = function(todo) {
            var model = {
                id: $scope.todos.length,
                title: todo,
                created: new Date(),
                done: false
            };

            var result = todoService.add(model);
            if (result.isValid) {
                $scope.todos.push(model);
            }
            else {
                swal(result.message);
            }

            $scope.todo = null;
        };

        /**
         * Remove an element
         * @param id
         */
        $scope.remove = function(id) {
            $scope.todos = _.without($scope.todos, _.findWhere($scope.todos, {id: id}));
            todoService.remove(id);
        };

        /**
         * Format a date
         * @param date
         * @returns the time elapsed from now
         */
        $scope.formatDate = function (date) {
            return moment(date).fromNow();
        };
    }])
;