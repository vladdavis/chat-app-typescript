import React, { Component } from 'react';

import './chat.css';
import Message from './Message';
import ChatForm from './ChatForm';
import { IUserState, IMessageDataState, ISendMessage } from '../../types/index';

export interface IProps {
  user: IUserState;
  messages: IMessageDataState[];
  messagesError: string;
  getMessages: () => void;
  sendMessage: (msg: ISendMessage) => boolean;
}

class Chat extends Component<IProps> {

  private messageContent = React.createRef<HTMLDivElement>();

  componentDidMount(){
    this.props.getMessages();
  }

  componentDidUpdate(prevProps: IProps){
    // Scroll messages down after the user received new messages
    if(this.props.messages.length !== prevProps.messages.length){
      const messageContent = this.messageContent.current;
      if(messageContent){
        messageContent.scrollTop = messageContent.scrollHeight;
      }
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
