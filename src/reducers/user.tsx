import { SIGN_IN, VALIDATION_ERROR_USERNAME, INVALIDATE_USER } from '../constants/serverActions';
import { IUserState } from '../types/index';

interface UserAction {
  type: string;
  payload: {
    isSignIn: boolean,
    id: number;
    error: string;
  }
}

const initialState: IUserState = {
  isSignIn: false,
  userId: null,
  error: ''
}

const user = (state = initialState, { type, payload }: UserAction): IUserState => {
  switch(type){
    case SIGN_IN:
      return {
        ...state,
        isSignIn: true,
        userId: payload.id,
        error: ''
      }
    case VALIDATION_ERROR_USERNAME:
      return {
        ...state,
        error: payload.error
      }
    case INVALIDATE_USER:
      return {
        ...state,
        isSignIn: false,
        userId: null
      }
    default:
      return state;
  }
}

export default user;
