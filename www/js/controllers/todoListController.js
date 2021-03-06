'use strict';

angular.module('myTodoList').controller('todoListController',
	function($log, $scope, $rootScope, todoListService) {

		// Charge la liste des todos
		$scope.todoList =  todoListService.getTodos();

		// Ecoute une maj de la table
		$rootScope.$on('todo:listChanged', function() {
			$scope.todoList =  todoListService.getTodos();
		});
	});
