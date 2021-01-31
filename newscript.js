// JavaScript source code
(function () {
    var app = angular.module('myApp', ['ui.router', 'ui.sortable']);

    app.run(function ($rootScope, $location, $state, LoginService) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                console.log('Changed state to: ' + toState);
            });

        if (!LoginService.isAuthenticated()) {
            $state.transitionTo('login');
        }
    });

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login.html',
                controller: 'LoginController'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'home.html',
                controller: 'HomeController'
            });
    }]);

    app.controller('LoginController', function ($scope, $rootScope, $stateParams, $state, LoginService) {
        $rootScope.title = "AngularJS Login Sample";
        $rootScope.players = [{
            "player_id": "001",
            "age": 35,
            "country": "IN",
            "installed_days": 10,
            "coins": 10000,
            "gems": 2,
            "game_level": 10,
            "purchaser": false
        }, {
            "player_id": "002",
            "age": 15,
            "country": "IN",
            "installed_days": 20,
            "coins": 10000,
            "gems": 25,
            "game_level": 20,
            "purchaser": false
        }];
        $scope.formSubmit = function () {
            if (LoginService.login($scope.username, $scope.password)) {
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('home');
            } else {
                $scope.error = "Incorrect username/password !";
            }
        };

    });

    app.controller('HomeController', function ($scope, $rootScope, $stateParams, $state, LoginService,$http) {
        $rootScope.title = "AngularJS Login Sample";
      
       
        $scope.offerlist = [{
            "offer_id": "OFF-1000",
            "offer_title": "Diwali Offer",
            "offer_description": "Only for next 10 days!",
            "offer_image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diwali-celebrations-with-traditional-clay-oil-diyas-royalty-free-image-1604089463.?crop=1.00xw:0.799xh;0,0.120xh&resize=480:*",
            "offer_sort_order": 101,
            "content": [{
                "item_id": "ITEM-1",
                "quantity": 10
            }, {
                "item_id": "ITEM-2",
                "quantity": 1
            }],
            "schedule": {
                "days_of_week": [0, 2, 3],
                "dates_of_month": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                "months_of_year": [11]
            },
            "target": "age = 30 and installed_days < 5",
            "pricing": [{
                "currency": "coins",
                "cost": 1000
            }, {
                "currency": "gems",
                "cost": 20
            }]
        },
            {
                "offer_id": "OFF-500",
                "offer_title": "Christmas Offer",
                "offer_description": "Only for next 20 days!",
                "offer_image": "",
                "offer_sort_order": 100,
                "content": [{
                    "item_id": "ITEM-1",
                    "quantity": 10
                }, {
                    "item_id": "ITEM-2",
                    "quantity": 1
                }],
                "schedule": {
                    "days_of_week": [1, 2, 3],
                    "dates_of_month": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    "months_of_year": [11]
                },
                "target": "age > 30 and installed_days < 5",
                "pricing": [{
                    "currency": "coins",
                    "cost": 1000
                }, {
                    "currency": "gems",
                    "cost": 20
                }]
            },
            {
                "offer_id": "OFF-501",
                "offer_title": "Christmas Offer",
                "offer_description": "Only for next 20 days!",
                "offer_image": "",
                "offer_sort_order": 110,
                "content": [{
                    "item_id": "ITEM-1",
                    "quantity": 10
                }, {
                    "item_id": "ITEM-2",
                    "quantity": 1
                }],
                "schedule": {
                    "days_of_week": [0, 1, 2, 3, 4, 5, 6],
                    "dates_of_month": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    "months_of_year": [11]
                },
                "target": "age = 35 and installed_days > 5",
                "pricing": [{
                    "currency": "coins",
                    "cost": 5000
                }, {
                    "currency": "gems",
                    "cost": 30
                }]
            },
            {
                "offer_id": "OFF-502",
                "offer_title": "Dusherra Offer",
                "offer_description": "Only for next 20 days!",
                "offer_image": "",
                "offer_sort_order": 110,
                "content": [{
                    "item_id": "ITEM-1",
                    "quantity": 10
                }, {
                    "item_id": "ITEM-2",
                    "quantity": 1
                }],
                "schedule": {
                    "days_of_week": [0, 1, 2, 3, 4, 5, 6],
                    "dates_of_month": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    "months_of_year": [11]
                },
                "target": "age = 35 and installed_days > 5",
                "pricing": [{
                    "currency": "coins",
                    "cost": 5000
                }, {
                    "currency": "gems",
                    "cost": 30
                }]
            },
            {
                "offer_id": "OFF-503",
                "offer_title": "First time Offer",
                "offer_description": "Only for next 20 days!",
                "offer_image": "",
                "offer_sort_order": 110,
                "content": [{
                    "item_id": "ITEM-1",
                    "quantity": 10
                }, {
                    "item_id": "ITEM-2",
                    "quantity": 1
                }],
                "schedule": {
                    "days_of_week": [0, 1, 2, 3, 4, 5, 6],
                    "dates_of_month": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    "months_of_year": [11]
                },
                "target": "age = 35 and installed_days > 5",
                "pricing": [{
                    "currency": "coins",
                    "cost": 5000
                }, {
                    "currency": "gems",
                    "cost": 30
                }]
            },
            {
                "offer_id": "OFF-504",
                "offer_title": "Christmas Offer",
                "offer_description": "Only for next 20 days!",
                "offer_image": "",
                "offer_sort_order": 110,
                "content": [{
                    "item_id": "ITEM-1",
                    "quantity": 10
                }, {
                    "item_id": "ITEM-2",
                    "quantity": 1
                }],
                "schedule": {
                    "days_of_week": [0, 1,2, 3,4,5,6],
                    "dates_of_month": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    "months_of_year": [11]
                },
                "target": "age = 35 and installed_days > 5",
                "pricing": [{
                    "currency": "coins",
                    "cost": 5000
                }, {
                    "currency": "gems",
                    "cost": 30
                }]
            }];
        $scope.backup = $scope.offerlist;
        $scope.editmode = false;
        $scope.createmode = false;
        $scope.a = {};
        $scope.a.content = [];
        $scope.a.pricing = [];
        for (var i = 0; i < $scope.offerlist; i++) {
            $scope.content[$scope.offerlist[i].offer_id] = $scope.offerlist[i].content;
        }

        $scope.loadplayer = function () {
            console.log($scope.offerlist);
            var middle = $rootScope.players.findIndex(elem => elem.player_id == $rootScope.user);
            $scope.temp=[];
            if (middle != -1) {
                $scope.player = $rootScope.players[middle];
                $scope.playerid = $rootScope.players[middle].player_id;
                $scope.gems = $rootScope.players[middle].gems;
                $scope.coins = $rootScope.players[middle].coins;
                //extracting correct data according to player
                //on basis of target condition:
                var length = $scope.offerlist.length;
                var today = new Date();
                var day = today.getDay();
                var month = today.getMonth();
                var date = today.getDate();
                for (var i = 0; i <length; i++) {
                    console.log(i);
                    var targetvalue = $scope.offerlist[i].target;
                    var conditions = targetvalue.split('and');
                    console.log(conditions);
                    var delindex = -1;
                    for (var j = 0; j < conditions.length; j++) {
                        var allinput = conditions[j].trim().split(" ");
                        var prop = allinput[0].toString().trim();
                        console.log($scope.player[prop]);
                        switch(allinput[1]){
                            case '>':
                                if ($scope.player[prop] <= allinput[2])
                                    delindex = i;
                            
                            break;
                            case '<':
                                if ($scope.player[prop] >= allinput[2]) {
                                    delindex = i;
                                   
                                }
                            
                            break;
                            case '=':
                                if ($scope.player[prop] != allinput[2]) 
                                    delindex = i;
                             
                            
                            break;
                            case '!=':
                                if ($scope.player[prop] == allinput[2]) 
                                    delindex = i;
                              
                            
                        }
                      
                    }
                    if (delindex == -1) {
                        var schedule = $scope.offerlist[i].schedule;
                        daycheck = schedule.days_of_week.indexOf(day);
                        datecheck = schedule.dates_of_month.indexOf(date);
                        mcheck = schedule.months_of_year.indexOf(month);
                        if (daycheck != -1 || datecheck!=-1||mcheck!=-1)
                        $scope.temp.push($scope.offerlist[i]);
                        
                    }

                    //scheduling logic
                     

                }
                console.log($scope.temp);
                $scope.offerlist = $scope.temp;
            }
            else {
                if ($rootScope.user == 'admin') {
                    $scope.playerid = $rootScope.user;
                }
            }
        }

        $scope.delete = function (x) {
            var index = $scope.offerlist.findIndex(elem => elem.offer_id == x.offer_id);
            if (index != -1) {
                $scope.offerlist.splice(index, 1);
            }
            $scope.backup = $scope.offerlist;
            $scope.search = '';
            $scope.searchitem($scope.search);
        }
        $scope.edit = function (x) {
            $scope.editmode = true;
            $scope.a = x;
            $scope.search = '';
            $scope.searchitem($scope.search);
        }
        $scope.createnew = function () {
            $scope.createmode = true;
            $scope.a = {};
            $scope.search = '';
            $scope.searchitem($scope.search);
        }
        $scope.gotoview = function () {
            if ($scope.createmode) {
                $scope.createmode = false;
            }
            else if ($scope.editmode) {
                $scope.editmode = false;
            }
            $scope.search = '';
            $scope.searchitem($scope.search);
        }
        $scope.savenew = function (a) {
            if ($scope.createmode == true) {
                console.log(a);
                a.pricing[0].currency = "coins";
                a.pricing[1].currency = "gems";
                $scope.offerlist.push(a);
                $scope.createmode = false;
            }
            else if ($scope.editmode == true) {
                var editindex = $scope.offerlist.findIndex(elem => elem.offer_id == a.offer_id);
                $scope.offerlist[editindex].offer_title = a.offer_title;
                $scope.offerlist[editindex].offer_description = a.offer_description;
                $scope.offerlist[editindex].content[0].item_id = a.content[0].item_id;
                $scope.offerlist[editindex].content[0].quantity = a.content[0].quantity;
                $scope.offerlist[editindex].content[1].item_id = a.content[1].item_id;
                $scope.offerlist[editindex].content[1].quantity = a.content[1].quantity;
                $scope.offerlist[editindex].target = a.target;
                $scope.offerlist[editindex].offer_sort_order = a.offer_sort_order;
                $scope.offerlist[editindex].pricing[0].cost = a.pricing[0].cost;
                $scope.offerlist[editindex].pricing[1].cost = a.pricing[1].cost;
                $scope.offerlist[editindex].offer_image = a.offer_image;
                $scope.editmode = false;
            }
            $scope.backup = $scope.offerlist;
            $scope.search = '';
            $scope.searchitem($scope.search);
        }
        $scope.searchitem=function(search){
            $scope.filteredjson = [];
            var searchlower = search.toLowerCase();
            console.log(searchlower);
            if (search) {
               
                var lista = ['offer_title', 'offer_description'];
                for (var i = 0; i < $scope.offerlist.length; i++) {
                    
                    for (var j = 0; j < lista.length; j++) {
                        var key = lista[j];
                        if ($scope.offerlist[i] && $scope.offerlist[i][key].toLowerCase().includes(search.toLowerCase())) {
                            console.log($scope.offerlist[i][key]);
                            $scope.filteredjson.push($scope.offerlist[i]);
                            break;
                        }
                    }
                }
                console.log($scope.filteredjson);
                $scope.offerlist = $scope.filteredjson;
            }
            else {
                $scope.offerlist = $scope.backup;
            }
        }
        $scope.sortableOptions = {
            stop: function (e, ui) {
                // do something here
            }
        };
       /* $(".slides").sortable({
            placeholder: 'slide-placeholder',
            axis: "y",
            revert: 150,
            start: function (e, ui) {

                placeholderHeight = ui.item.outerHeight();
                ui.placeholder.height(placeholderHeight + 15);
                $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);

            },
            change: function (event, ui) {

                ui.placeholder.stop().height(0).animate({
                    height: ui.item.outerHeight() + 15
                }, 300);

                placeholderAnimatorHeight = parseInt($(".slide-placeholder-animator").attr("data-height"));

                $(".slide-placeholder-animator").stop().height(placeholderAnimatorHeight + 15).animate({
                    height: 0
                }, 300, function () {
                    $(this).remove();
                    placeholderHeight = ui.item.outerHeight();
                    $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
                });

            },
            stop: function (e, ui) {

                $(".slide-placeholder-animator").remove();

            },
        });*/
    });
    app.directive("ngFileSelect", function (fileReader, $timeout) {
        return {
            scope: {
                ngModel: '='
            },
            link: function ($scope, el) {
                function getFile(file) {
                    fileReader.readAsDataUrl(file, $scope)
                        .then(function (result) {
                            $timeout(function () {
                                $scope.ngModel = result;
                            });
                        });
                }

                el.bind("change", function (e) {
                    var file = (e.srcElement || e.target).files[0];
                    getFile(file);
                });
            }
        };
    });
  
    app.factory("fileReader", function ($q, $log) {
        var onLoad = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.resolve(reader.result);
                });
            };
        };

        var onError = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.reject(reader.result);
                });
            };
        };

        var onProgress = function (reader, scope) {
            return function (event) {
                scope.$broadcast("fileProgress", {
                    total: event.total,
                    loaded: event.loaded
                });
            };
        };

        var getReader = function (deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        };

        var readAsDataURL = function (file, scope) {
            var deferred = $q.defer();

            var reader = getReader(deferred, scope);
            reader.readAsDataURL(file);

            return deferred.promise;
        };

        return {
            readAsDataUrl: readAsDataURL
        };
    });


    app.factory('LoginService', function ($rootScope) {
        var admin = 'admin';
        var pass = 'pass';
        var isAuthenticated = false;

        return {
            login: function (username, password) {
                var middle = $rootScope.players.find(elem => elem.player_id == username);
                if (middle != undefined) {
                    var check =middle.player_id;
                }
                isAuthenticated = ((username === admin && password === pass) || (username == check && password === pass));
                $rootScope.user = username;
                console.log($rootScope.user);
                return isAuthenticated;
            },
            isAuthenticated: function () {
                return isAuthenticated;
            }
        };

    });

})();