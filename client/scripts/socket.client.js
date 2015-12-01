var socket = io("http://2weiremote.azurewebsites.net");
socket.on("connection-successful", function(){
   console.log("Verbindung mit Socket.io erfolgreich!"); 
});