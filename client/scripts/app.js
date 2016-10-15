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
<<<<<<< HEAD
                          $(this).val('');
                          $scope.message = '';
                          $scope.name = ''
=======
                           $(this).val('');
                            $scope.message = '';
                            $scope.name = ''
>>>>>>> 2a3a1b280940624591604d55cc1f01b064f72974
                        });
                    }
                });

                var already = false;
                if(document.cookie){
                  already = true;
                }
                document.cookie = "alreadySentMessage=true";
                //$("#new-message").velocity("fadeIn", {delay: 200, duration: 500});
                socket.emit('chat-message', {"name": $scope.name, "message": $scope.message, "alreadySent": already});
                console.log("Nachricht gesendet ------ " + $scope.name + ": " + $scope.message);
            }
        };

        $scope.closeMessage = function(){
            $("#success-message").velocity({ opacity: 0}, 500);
            $("#message-form").velocity("fadeIn", {delay: 500, duration: 500});
        };
    })
})();
