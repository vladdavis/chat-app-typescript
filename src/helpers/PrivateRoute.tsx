import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IStoreState } from '../types/index';

interface IProps {
  isSignIn: boolean;
  exact?: boolean;
  path: string;
  render?: any;
  component?: any;
}

class PrivateRoute extends Component<IProps> {
  render(){
    return (
      this.props.isSignIn ? (
        <Route {...this.props} />
      ) : (
        <Redirect to="/login"/>
      )
    )
  }
}

const mapStateToProps = (state: IStoreState) => ({
  isSignIn: state.user.isSignIn
})

export default connect(mapStateToProps)(PrivateRoute);
