export function validateUsername(username: string, handleError: (error: string) => void) {
  if(!username.length){
    handleError('short_username');
    return false;
  }
  if(username.length > 32){
    handleError('long_username');
    return false;
  }

  return true;
}

export function validateMessage(message: string, handleError: (error: string) => void) {
  if(!message.length){
    handleError('short_message');
    return false;
  }
  if(message.length > 255){
    handleError('long_message');
    return false;
  }

  return true;
}
