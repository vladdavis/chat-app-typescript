import { Dispatch } from 'redux';
import { SEND_MESSAGE, GET_ALL_MESSAGES, VALIDATION_ERROR_MESSAGE } from '../constants/serverActions';
import { emit } from "../store/middleware/WebSocketMiddleware";
import { validateMessage } from '../helpers/validation';
import { getActionHendleError } from '../helpers/getActionHendleError';
import { ISendMessage } from '../types/index';


export const getMessages = () => (dispatch: Dispatch): void => {
  dispatch(emit(GET_ALL_MESSAGES));
}

export const sendMessage = (msg: ISendMessage) => (dispatch: Dispatch): boolean => {
  const handleError = getActionHendleError(
    VALIDATION_ERROR_MESSAGE,
    dispatch
  );

  if(validateMessage(msg.text, handleError)){
    dispatch(emit(SEND_MESSAGE, msg));
    return true;
  }
  return false;
}
