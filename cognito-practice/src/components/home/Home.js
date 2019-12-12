import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom"
import {Auth} from "aws-amplify";
import "./home.css"
import { ConsoleLogger } from '@aws-amplify/core';
// Amplify.configure(aws_exports)


class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loading: true,
          username: ""
      }
  }

  componentWillMount() {
    Auth.currentSession().then((user) => this.setState({loading: false, username: user.accessToken.payload.username})).catch((err) => {console.log(err)} )
  }

  accessTokenObj = localStorage.getItem("jwt")


  render() {

    console.log(Auth.currentSession().then((user) => console.log(user.accessToken.payload.username)))
    
    

      return (
        <div>
            <div className="Nav"> 
                {this.state.loading ? null : <button onClick={() => {Auth.signOut().then(() => {this.props.history.push('/signin')}).catch((err) => {console.log(err)} )}}> Logout </button>}
            </div>
            {`WELCOME HOME ${this.state.username} !!`}
        </div>
        )
  }
}
 
export default Home;
