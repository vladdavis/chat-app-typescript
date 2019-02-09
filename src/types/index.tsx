// store
export interface IStoreState {
  user: IUserState;
  messages: IMessagesState
}

export interface IUserState {
  isSignIn: boolean;
  userId: number | null;
  error: string;
};

export interface IMessagesState {
  data: IMessageDataState[];
  error: string;
};

export interface IMessageDataState {
  id: number;
  username: string;
  text: string;
};

//others
export interface ISendMessage {
  userId: number;
  text: string;
}
