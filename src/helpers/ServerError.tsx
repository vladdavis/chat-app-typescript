import React, { Component } from 'react';

import { socket } from '../socket/socket';
import { SERVER_ERRORS } from '../constants/errors'

class ServerError extends Component {
  state = {
    error: ''
  }

  private globalServerErrors = [
    'error',
    'connect_error',
    'reconnect',
    'disconnect',
    'INVALIDATE_USER'
  ];

  private clearErrorTimeout(time: number){
    setTimeout(() => {
      this.setState({error: ''});
    }, 3000)
  }

  componentDidMount(){
    this.globalServerErrors.forEach(error => {
      socket.on(error, () => {
        this.setState({error: SERVER_ERRORS[error]});

        // Hide server error after the app got these errors
        if(error === 'reconnect' || error === 'INVALIDATE_USER'){
          this.clearErrorTimeout(3000);
        }
      });
    })
  }

  render(){
    return (
      <>
        {this.state.error && (
          <div className="serverError">
            {this.state.error}
          </div>
        )}
      </>
    )
  }
}

export default ServerError;
