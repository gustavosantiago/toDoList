angular.module('starter.controllers', [])
  .controller('ToDoListCtrl', function($scope,$ionicModal) {
      $scope.toDoListItems = [{
      }];

    //função para adicionar itens para uma lista existente
    $scope.AddItem = function(data){
      $scope.toDoListItems.push({task:data.newItem,status:'not done'});
        data.newItem = ' ';
        $scope.closeModal();
    };

    //iniciando o modal
    $ionicModal.fromTemplateUrl('modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    //função para abrir o modal
    $scope.openModal = function() {
      $scope.modal.show();
    };

    //função para fechar o modal
    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //limpando o modal quando tudo tiver feito
    $scope.$on('$destroy', function(){
      $scope.modal.remove();
    });
});