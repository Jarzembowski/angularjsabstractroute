app.factory("greetingService", function($q, $timeout){
    return {
        getGreeting: function(){
            var deferred = $q.defer();
            $timeout(function(){
                deferred.resolve("Allo!");
            },2000);
            return deferred.promise;
        }
    }
 });