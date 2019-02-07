const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const messageAction = require('./actions/messageAction.js');
const signinAction = require('./actions/signinAction.js');

const port = 3001;

const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES';
const SIGN_IN = 'SIGN_IN';
const SEND_MESSAGE = 'SEND_MESSAGE';

const messages = [];
const users = [];

io.on('connection', (socket) => {
  socket.on(GET_ALL_MESSAGES, (msg) => {
    messageAction[GET_ALL_MESSAGES](messages, socket);
  });

  socket.on(SEND_MESSAGE, (msg) => {
    messageAction[SEND_MESSAGE](msg, messages, users, socket, io);
  });

  socket.on(SIGN_IN, (username) => {
    signinAction[SIGN_IN](username, users, socket);
  })
});

http.listen(port, function(){
  console.log(`listening on *:${port}`);
});
