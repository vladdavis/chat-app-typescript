import { Dispatch } from 'redux';
import { StoreState } from '../../types/index';

interface IProps {
  dispatch: Dispatch;
  state: StoreState;
}

export default function AsyncFunctionMiddleware({ dispatch, state }: IProps) {
  return (next: Dispatch) => (action: any) => {
    if(typeof action === 'function'){
      return action(dispatch, state);
    }
    return next(action);
  }
}
