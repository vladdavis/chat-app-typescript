import { Dispatch } from 'redux';

export function getActionHendleError(eventType: string, dispatch: Dispatch){
  return (error: string) => {
    dispatch({
      type: eventType,
      payload :{
        error: error
      }
    });
  }
}
