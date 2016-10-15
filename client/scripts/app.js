"use strict";
/* global angular */
/* global socket */
(function(){
    var app = angular.module("chat", []);

    app.controller("ChatController", function($scope){

        $scope.sendMessage = function(){
            if($scope.name != "" && $scope.message != "")
            {
                $("#message-form").velocity("fadeOut", { delay: 100, duration: 500 });
                $('#success-message').delay(600).velocity({opacity: 1}, { duration: 500,
                    complete: function(elements){
                        $("#message-form input").each(function(){
                          $(this).val('');
                          $scope.message = '';
                          $scope.name = ''
                           $(this).val('');
                            $scope.message = '';
                            $scope.name = ''
                        });
                    }
                });

                var already = false;
                if(document.cookie){
                  already = true;
                }
                document.cookie = "userId=" + createGuid();
                //$("#new-message").velocity("fadeIn", {delay: 200, duration: 500});
                socket.emit('chat-message', {"name": $scope.name, "message": $scope.message, "alreadySent": already, "cookie": document.cookie});
                console.log("Nachricht gesendet ------ " + $scope.name + ": " + $scope.message);
            }
        };

        $scope.createGuid =     function () {
              function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
              }
              return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
            };

        $scope.closeMessage = function(){
            $("#success-message").velocity({ opacity: 0}, 500);
            $("#message-form").velocity("fadeIn", {delay: 500, duration: 500});
        };
    })
})();
