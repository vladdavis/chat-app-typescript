const validation = require('../helpers/validation.js');

const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES';
const SEND_MESSAGE = 'SEND_MESSAGE';

const INVALIDATE_USER = 'INVALIDATE_USER';

function getAllMessages(messages, socket){
  socket.emit(GET_ALL_MESSAGES, messages);
}

function sendMessage(msg, messages, users, socket, io){
  if(validation.validateMessageOrError(msg.text, socket)){
    const user = users.find(item => (item.id === msg.userId));
    if(user){
      const payload = {
        id: Date.now(),
        username: user.username,
        text: msg.text
      }

      messages.push(payload);
      io.emit(SEND_MESSAGE, payload);
    }else{
      socket.emit(INVALIDATE_USER);
    }
  }
}

module.exports = {
  [GET_ALL_MESSAGES]: getAllMessages,
  [SEND_MESSAGE]: sendMessage
};
