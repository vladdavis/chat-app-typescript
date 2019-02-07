import React from 'react';

export interface Props {
  username: string;
  text: string;
}

const Message = ({ username, text }: Props) => (
  <div className="message">
    <div className="message__username">{username}:</div>
    <div className="message__text">{text}</div>
  </div>
)

export default Message;
