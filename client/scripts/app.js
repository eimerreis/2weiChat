"use strict";
/* global angular */
/* global socket */
(function(){
    var app = angular.module("chat", []);
    
    app.controller("ChatController", function($scope){
        
        $scope.sendMessage = function(){
          socket.emit('chat-message', {"name": $scope.name, "message": $scope.message});  
        };
    })
})();