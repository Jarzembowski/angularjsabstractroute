app.controller("teste2Controller", function ($scope, initialData) {        
    
    $scope.data = initialData;

    $scope.alterar = function (){
        $scope.obj.prop1 = "alterado pelo controller 2";
    }
});