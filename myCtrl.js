angular.module('todos')
.controller('todoCtrl', function($scope){
  $scope.todos = [
    'Create a todo List',
    'Update the todo List',
    'Remove todos',
    'Show completed todos',

  ];

  $scope.addTodo = function(){
    $scope.todos.push($scope.newTodo);
  };
  $scope.removeTodo = function(todo){
    $scope.todos = $scope.todos.filter(function(cur){
      return cur !== todo;
    })
  };
});
