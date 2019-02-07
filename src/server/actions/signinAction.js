const validation = require('../helpers/validation.js');

const SIGN_IN = 'SIGN_IN';

function signIn(username, users, socket){
  if(validation.validateUsernameOrError(username, socket)){
    const id = Date.now();
    users.push({ id, username });
    socket.emit(SIGN_IN, { id });
  }
}

module.exports = {
  [SIGN_IN]: signIn
};
