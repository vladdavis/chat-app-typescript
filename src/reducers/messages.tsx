import { SEND_MESSAGE, GET_ALL_MESSAGES, VALIDATION_ERROR_MESSAGE } from '../constants/serverActions';

const initialState = {
  data: [],
  error: ''
}

interface MessageAction {
  type: string;
  payload: any;
}
/*interface PayloadMessageAction {
  id: number;
  username: string;
  userId: number;
  text: string;
}*/

const messages = (state = initialState, { type, payload }: MessageAction) => {
  switch(type){
    case GET_ALL_MESSAGES:
      return {
        ...state,
        data: [
          ...payload
        ]
      }
    case SEND_MESSAGE:
      return {
        ...state,
        data: [
          ...state.data,
          payload
        ],
        error: ''
      }
    case VALIDATION_ERROR_MESSAGE:
      return {
        ...state,
        error: payload.error
      }
    default:
      return state;
  }
}

export default messages;
