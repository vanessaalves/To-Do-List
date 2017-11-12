var toDo = angular.module('toDo',[]).
		controller('todoController',['$scope',function($scope){
			$scope.todos = [
				{tarefa:'Monte sua lista','done':false}
				];

			$scope.addTodo = function (){
				$scope.todos.push({'tarefa':$scope.newtodo, 'done':false})
				$scope.newtodo = ''         
          }
				
			$scope.clearTrue = function(){
				$scope.todos = $scope.todos.filter(function(tarefa) {
					return !tarefa.done
				});
			}	

		}])