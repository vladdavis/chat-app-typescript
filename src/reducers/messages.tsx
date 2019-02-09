import { SEND_MESSAGE, GET_ALL_MESSAGES, VALIDATION_ERROR_MESSAGE } from '../constants/serverActions';
import { IMessagesState } from '../types/index';

interface IMessageAction {
  type: string;
  payload: any;
}

const initialState: IMessagesState = {
  data: [],
  error: ''
}

const messages = (state = initialState, { type, payload }: IMessageAction): IMessagesState => {
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
