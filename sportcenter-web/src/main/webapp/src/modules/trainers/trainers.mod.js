/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (ng) {
    
    var mod = ng.module("trainerModule", ['ui.router']);
    
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            
            var basePath = 'src/modules/trainers/';
            
            $urlRouterProvider.otherwise("/trainersList");
            
            $stateProvider.state('trainersList', {
                
                url: '/trainers/list',
                views: {
                    'mainView': {
                        templateUrl: basePath + 'trainers.list.html',
                        controller: 'trainerCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            }).state('trainerDetail',{
                url:'/{idTrainer int}/trainerDetail',
                param:{idTrainer:null},
                views:{
                    'mainView':{
                        templateUrl: basePath + 'trainers.detail.html',
                        controller: 'trainerDetailCtrl',
                        controllerAs: 'ctrl'
                    }
                } 
            });
        }
    ]);
})(window.angular);

