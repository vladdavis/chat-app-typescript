import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import ServerError from './helpers/ServerError';
import PrivateRoute from './helpers/PrivateRoute';
import LoginContainer from './containers/LoginContainer';
import ChatContainer from './containers/ChatContainer';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ServerError />
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={ChatContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
