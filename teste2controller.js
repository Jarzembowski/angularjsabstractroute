app.controller("teste2Controller", function ($scope) {        
    
    
    $scope.alterar = function (){
        $scope.obj.prop1 = "alterado pelo controller 2";
    }
});