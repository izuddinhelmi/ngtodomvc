//= require ../bower_components/jquery/dist/jquery.min.js
//= require ../bower_components/angular-full/angular.min.js
//= require ../bower_components/angular-full/angular-route.js
//= require ../bower_components/firebase/firebase.js
//= require ../bower_components/angularfire/dist/angularfire.js

(function (window) {
	'use strict';

	var todos = [
		{
			done : false,
			name : 'Buy Milk'
		}, {
			done : false,
			name : 'Buy Eggs'
		}
	]

	var app = angular.module('todos',['ngRoute', 'firebase'])
		.controller('listController', function($rootScope, $scope){
			$scope.removeTodo = function(todo){
				$rootScope.todos.$remove(todo);
			}
			$scope.editTodo = function(todo) {
				console.log(todo);
				todo.editing = true;
			}
			$scope.todoSetDone = function(todo) {
				$rootScope.todos.$save(todo);
			}
			$scope.exitEditMode = function($event, todo) {
				if($event.keyCode == 27 || $event.keyCode == 13) {
					todo.editing = false;
					$rootScope.todos.$save(todo);
				}
			}
		})

		.controller('createController', function($rootScope, $scope){
			$scope.createTodo = function ($event) {

				if($event.keyCode == 13) {
					$rootScope.todos.$add({
						done:false,
						name: $scope.newTodo
					})
					$scope.newTodo = ''
				}
				// console.log($scope.newTodo)
			}
			//$rootScope
		})
		.controller('footerController', function($rootScope, $scope, $location){
			// $scope.itemsLeft = function(){
			// 	return $
			// }

			$scope.location = $location;

			$scope.incompleteLength = function(){
				return $rootScope.todos.filter(function(todo){
					return todo.done == false;
				}).length;
			}

			$scope.clearCompleted = function() {
				$rootScope.todos.forEach(function(todo){
					if(todo.done) {
						$rootScope.todos.$remove(todo);
					}
				})
				$rootScope.todos = $rootScope.todos.filter(function(todo){
					return todo.done ==false;
				})
			}
		})

		.config(function($routeProvider){
			$routeProvider
				.when('/active', {
					templateUrl: 'active.html',
					controller : 'listController'
				})

				.when('/completed', {
					templateUrl: 'completed.html',
					controller : 'listController'
				})
				.when('/', {
					templateUrl: 'all.html',
					controller : 'listController'
				})
		})
		.run(function($rootScope, $firebase){
			var source = new Firebase('https://iztodos.firebaseio.com/');
			$rootScope.todos = $firebase(source).$asArray();
		})

})(window);
