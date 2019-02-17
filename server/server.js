// __dirname points to the actual server (server)
// console.log(__dirname + '/../public');
// const path = require('path');
// const publicPath = path.join(__dirname, '../public');
// console.log(publicPath);

const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('create a message', message);
  });

  socket.emit('newMessage', {
    from: 'jhon',
    text: 'hey how are you',
    createAt: 123
  });



  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });

});



// app.get((req, res) => {
//   res.sendFile(publicPath + 'index.html');
// });

server.listen(port, () => {
  console.log(`listen on port ${port}`)
});
