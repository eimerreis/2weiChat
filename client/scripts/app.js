"use strict";
/* global angular */
/* global socket */
(function(){
    var app = angular.module("chat", []);
    
    app.controller("ChatController", function($scope){
        
        $scope.sendMessage = function(){
            if($scope.name != "" && $scope.message != "")
            {
                socket.emit('chat-message', {"name": $scope.name, "message": $scope.message});
                console.log("Nachricht gesendet ------ " + $scope.name + ": " + $scope.message);
            }
        };
    })
})();