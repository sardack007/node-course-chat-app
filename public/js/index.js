var socket = io();

socket.on('connect', function () {
  console.log('connected to server');



});



socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function(email) {
  console.log('New message', email);
});

socket.on('greetings', function (user){
  console.log(user.text);
});
