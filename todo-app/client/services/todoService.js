/**
 * Created by LuisGuillermo on 5/30/2015.
 */
'use strict';
angular.module('TodoApp')
    .factory('TodoService', ['$http', function($http) {
        /**
         * In memory data
         * @type {*[]}
         */
        var data = [
            {
                id: 1,
                title: 'Study english',
                done: false,
                created: moment().subtract(1, 'hours').toDate()
            },
            {
                id: 2,
                title: 'Study Angular.js',
                done: false,
                created: moment().subtract(2, 'hours').toDate()
            },
            {
                id: 3,
                title: 'Be awesome',
                done: true,
                created: moment().subtract(5, 'hours').toDate()
            },
            {
                id: 4,
                title: 'Play tennis',
                done: false,
                created: moment().subtract(1, 'days').toDate()
            }
        ];

        return {
            /**
             * Get the list of todo items
             * @returns {*[]}
             */
            get: function() {
                return data.slice();
            },
            /**
             * Add a todo item
             * @param todo
             * @returns {*} an object indicating if was added and a message.
             */
            add: function(todo) {
                if (_.findWhere(data, {title: todo.title})) {
                    return {isValid: false, message: 'There is already a todo item with the same title.'};
                }

                data.push(todo);
                return {isValid: true, message: 'Todo item successfully added.'};
            },
            /**
             * Remove a todo item
             * @param id
             */
            remove: function(id) {
                data = _.without(data, _.findWhere(data, {id: id}));
            }
        }
    }])
;