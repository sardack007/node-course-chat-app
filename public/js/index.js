var socket = io();

socket.on('connect', function () {
  console.log('connected to server');



});



socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('New message', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('greetings', function (user){
  console.log(user.text);
});

// socket.emit('createMessage', {
//   from: 'Frank',
//   text: 'hi'
// }, function (data) {
//   console.log('Got it', data);
// });

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'user',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});
