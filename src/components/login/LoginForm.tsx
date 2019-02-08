import React, { Component } from 'react';

import ValidationError from '../../helpers/ValidationError';

export interface IProps {
  error: string;
  signIn: (username: string) => void;
}

class LoginForm extends Component<IProps> {

  private username = React.createRef<HTMLInputElement>();

  private signIn = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const username = this.username.current;
    if(username){
      this.props.signIn(username.value);
    }
  }

  render(){
    return (
      <form className="login__form" onSubmit={this.signIn}>
        <div className="login__field">
          <div>Username</div>
          <input type="text" ref={this.username} />
        </div>
        <div className="login__error">
          <ValidationError error={this.props.error} />
        </div>
        <button>Sign in</button>
      </form>
    )
  }
}

export default LoginForm;
