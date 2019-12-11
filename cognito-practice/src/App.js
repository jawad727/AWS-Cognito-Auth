import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify"
import aws_exports from './aws-exports'
import { withAuthenticator } from "aws-amplify-react";
import SignUp from "./components/signup/SignUp"
import SignIn from "./components/signup/SignIn"
import Home from "./components/home/Home"
import { Route, Switch } from "react-router-dom"
import {connect} from "react-redux"
import {fetchUsers} from "./store/actions/index"
Amplify.configure(aws_exports)

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          signedUp : false
      }
      this.handleSignup = this.handleSignup.bind(this);
  }

  componentDidMount() {
      this.props.fetchUsers();
  }

  handleSignup() {
      this.setState({
          signedUp: true
      });
  }
  render() {
      const { signedUp } = this.state;
        console.log(this.props.usersArray)

      return (
        <div>
        <Switch>
        <Route exact path="/signup" component={SignUp} handleSignup={ this.handleSignup } />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route path="*" component={SignIn} />
        </Switch>
        </div>
        )
  }
}
 
const mapStateToProps = state => ({
    usersArray: state.usersArray
  })
  
  export default connect(mapStateToProps, {fetchUsers})(App);
