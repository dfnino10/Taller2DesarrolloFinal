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
            
            $stateProvider.state('trainers', {
                
                url: '/trainers',
                abstract: true,
                views: {
                    'mainView': {
                        templateUrl: basePath + 'trainers.html',
                        controller: 'trainerCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            }).state('trainersList', {
                
                url: '/list',
                parent: 'trainers',
                views: {
                    'listView': {
                        templateUrl: basePath + 'trainers.list.html',
                        controller: 'trainerCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            }).state('trainerDetail',{
                url:'/{idTrainer: int}/detail',
                parent: 'trainers',
                param:{idTrainer:null},
                views:{
                    'listView': {
                        templateUrl: basePath + 'trainers.list.html'
                    },
                    'detailView':{
                        templateUrl: basePath + 'trainers.detail.html',
                        controller: 'trainerDetailCtrl',
                        controllerAs: 'ctrl'
                    }
                } 
            });
        }
    ]);
})(window.angular);

