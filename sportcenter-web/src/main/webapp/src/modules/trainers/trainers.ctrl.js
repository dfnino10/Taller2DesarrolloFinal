(function (ng) {
    var mod = ng.module("trainerModule");
    mod.constant("trainerContext", "api/trainers");
    mod.controller('trainerCtrl', ['$scope', '$http', 'trainerContext',
        function ($scope, $http, trainerContext) {
            $http.get('data/trainers.json').then(function (response) {
                $scope.trainersRecords = response.data;
            });
        }
    ]);
}
)(window.angular);