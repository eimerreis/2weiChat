var socket = io("http://2weiremote.azurewebsites.net");
socket.on("connection-successful", function(){
   console.log("Verbindung mit Socket.io erfolgreich!");
});

socket.on('drink-winner', function(winner){
  if(winner === document.cookie)
  {
    $('.winner-modal').modal('show');
  }
});
