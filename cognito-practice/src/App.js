import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify"
import aws_exports from './aws-exports'
import { withAuthenticator } from "aws-amplify-react";
import SignUp from "./signup/SignUp"
import SignIn from "./signup/SignIn"
Amplify.configure(aws_exports)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSignedUp: false
    }

    this.handleToggle = this.handleToggle.bind(this)
}

handleToggle() {
  const {userSignedUp} = this.state

  this.setState({
    userSignedUp: !userSignedUp
  })
}

render() {
  const { userSignedUp } = this.state
  
  return (
    <div>
      <button onClick={this.handleToggle} > Toggle </button>
      {!userSignedUp ? <SignUp /> : <SignIn />}
    </div>
  );
}

}

export default App;
