import { Dispatch } from 'redux';
import { StoreState } from '../../types/index';
import { socket, serverTypesEvent } from '../../socket/socket';

const WEBSOCKET = 'WEBSOCKET';

interface IProps {
  dispatch: Dispatch;
}

export default function WebSocketMiddleware({ dispatch }: IProps){
  serverTypesEvent.forEach(eventType => {
    socket.on(eventType, (data: any) => {
      dispatch({
        type: eventType,
        payload: data
      });
    })
  })

  return (next: Dispatch) => (action: any) => {
    if(action.type === WEBSOCKET){
      const { eventType, data } = action.payload;
      return socket.emit(eventType, data);
    }
    return next(action);
  }
}

export function emit(eventType: string, data?: any) {
  return {
    type: WEBSOCKET,
    payload: {
      eventType,
      data
    }
  }
}
