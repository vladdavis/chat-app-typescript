const VALIDATION_ERROR_USERNAME = 'VALIDATION_ERROR_USERNAME';
const VALIDATION_ERROR_MESSAGE = 'VALIDATION_ERROR_MESSAGE';

function validateUsernameOrError(username, socket) {
  if(!username.length){
    handleError(socket, 'short_username', VALIDATION_ERROR_USERNAME);
    return false;
  }
  if(username.length > 32){
    handleError(socket, 'long_username', VALIDATION_ERROR_USERNAME);
    return false;
  }

  return true;
}

function validateMessageOrError(message, socket) {
  if(!message.length){
    handleError(socket, 'short_message', VALIDATION_ERROR_MESSAGE);
    return false;
  }
  if(message.length > 255){
    handleError(socket, 'long_message', VALIDATION_ERROR_MESSAGE);
    return false;
  }

  return true;
}

function handleError(socket, error, errorConst){
  socket.emit(errorConst, { error });
}

module.exports = {
  validateUsernameOrError,
  validateMessageOrError
};
