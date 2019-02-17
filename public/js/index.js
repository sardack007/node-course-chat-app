var socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  socket.emit('createMessage', {
    from : 'jim',
    text: 'hey.this is jim.'
  });

});



socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function(email) {
  console.log('New message', email);
});
