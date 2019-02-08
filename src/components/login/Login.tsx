import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './login.css';
import LoginForm from './LoginForm';
import { UserState } from '../../types/index';

export interface IProps {
  user: UserState;
  signIn: (username: string) => void;
}

class Login extends Component<IProps> {
  render(){
    const { user, signIn } = this.props;

    return (
      user.isSignIn ? (
        <Redirect to="/"/>
      ) : (
        <div className="login">
          <LoginForm error={user.error} signIn={signIn} />
        </div>
      )
    )
  }
}

export default Login;
