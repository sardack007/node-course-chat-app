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

  socket.emit('greetings', {for: 'Jim', text: 'welcome to the chat'});

  socket.broadcast.emit('newMessage', {
    from: 'Jim',
    text: 'jim has joined',
    createAt: new Date().getTime()
  });

  socket.on('createMessage', (message) => {
    console.log('create a message', message);
    // io.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createAt: new Date().getTime()
    // });

    // envia el evento a los demas menos al que envio el evento
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createAt: new Date().getTime()
    // });
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
