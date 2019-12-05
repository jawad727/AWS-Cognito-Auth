import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify"
import aws_exports from './aws-exports'
import { withAuthenticator } from "aws-amplify-react";
import SignUp from "./signup/SignUp"
import SignIn from "./signup/SignIn"
import Home from "./home/Home"
import { Route, Switch } from "react-router-dom"
Amplify.configure(aws_exports)

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          signedUp : false
      }
      this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup() {
      this.setState({
          signedUp: true
      });
  }
  render() {
      const { signedUp } = this.state;
      return (
        <div>
        {/* <Switch><Route exact path="/" component={Register} exact/></Switch> */}
        {/* { !signedUp ? <Route exact path="/signup" component={SignUp} handleSignup={ this.handleSignup } /> : <Route exact path="/signin" component={SignIn} /> } */}
        <Switch>
        <Route exact path="/signup" component={SignUp} handleSignup={ this.handleSignup } />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route path="*" component={() => "404 NOT FOUND" } />
        </Switch>
        </div>
        )
  }
}
 
export default App;
