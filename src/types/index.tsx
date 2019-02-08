
export interface StoreState {
  user: UserState;
  messages: MessagesState
}

export interface UserState {
  isSignIn: boolean;
  userId: number | null;
  error: string;
};

export interface MessagesState {
  data: MessageDataState[];
  error: string;
};


export interface MessageDataState {
  id: number;
  username: string;
  text: string;
};

export interface SendMessage {
  userId: number;
  text: string;
}
