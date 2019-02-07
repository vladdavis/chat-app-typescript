import React, { Component } from 'react';

import { UserState, SendMessage } from '../../types/index';
import ValidationError from '../../helpers/ValidationError';

export interface Props {
  user: UserState;
  sendMessage: (msg: SendMessage) => boolean;
  error: string;
}

class ChatForm extends Component<Props> {

  private message = React.createRef<HTMLInputElement>();

  //TODO: desided with any
  sendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const userId = +this.props.user.userId;
    const message = (this as any).message.current.value;

    const isSended = this.props.sendMessage({
      userId,
      text: message
    });

    if(isSended) (this as any).message.current.value = '';
  }

  render(){
    return (
      <div>
        <form className="chat__form" onSubmit={this.sendMessage}>
          <input type="text" ref={this.message} placeholder="Message" />
          <button>Send</button>
        </form>
        <ValidationError error={this.props.error} />
      </div>
    )
  }
}
export default ChatForm;
