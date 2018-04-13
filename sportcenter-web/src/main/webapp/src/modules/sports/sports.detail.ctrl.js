(function (ng) {
    var mod = ng.module("sportModule");
    mod.constant("sportContext", "api/sports");
    mod.controller('sportDetailCtrl', ['$scope', '$http', 'sportContext', '$state', '$filter',
        function ($scope, $http, sportContext, $state, $filter) {

            if (($state.params.sportId !== undefined) && ($state.params.sportId !== null)) {
                $http.get('data/sports.json').then(function (response) {
                    $scope.sportsRecords = response.data;
                    $scope.currentSport = $filter('filter')($scope.sportsRecords, {id: $state.params.sportId}, true)[0];
                });
            }
        }
    ]);
}
)(window.angular);