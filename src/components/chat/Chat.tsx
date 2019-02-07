import React, { Component } from 'react';

import './chat.css';
import Message from './Message';
import ChatForm from './ChatForm';
import { UserState, MessageDataState, SendMessage } from '../../types/index';

export interface Props {
  user: UserState;
  messages: MessageDataState[];
  messagesError: string;
  getMessages: () => void;
  sendMessage: (msg: SendMessage) => any;
}

class Chat extends Component<Props> {

  private messageContent = React.createRef<HTMLDivElement>();

  componentDidMount(){
    this.props.getMessages();
  }

  componentDidUpdate(prevProps: Props){
    // Scroll messages down after the user received new messages
    if(this.props.messages.length !== prevProps.messages.length){
      const messageContent: any = this.messageContent.current;
      messageContent.scrollTop = messageContent.scrollHeight;
    }
  }

  render(){
    return (
      <div className="chat">
        <div className="chat__wrapper">
          <div ref={this.messageContent} className="chat__content">
            {this.props.messages.map(message => (
              <Message
                username={message.username}
                text={message.text}
                key={message.id}
              />
            ))}
          </div>
        </div>
        <ChatForm
          user={this.props.user}
          sendMessage={this.props.sendMessage}
          error={this.props.messagesError}
        />
      </div>
    )
  }
}
export default Chat;
