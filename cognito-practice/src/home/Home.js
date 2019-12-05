import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom"
import {Auth} from "aws-amplify";
import "./Home.css"
import { ConsoleLogger } from '@aws-amplify/core';
// Amplify.configure(aws_exports)

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loading: true
      }
  }

  componentWillMount() {
    Auth.currentSession().then((ses) => this.setState({loading: false})).catch((err) => {console.log(err)} )
  }

  accessTokenObj = localStorage.getItem("jwt")


  render() {

    // console.log(this.accessTokenObj)
    
    

      return (
        <div>
            <div className="Nav"> 
                {this.state.loading ? null : <button onClick={() => {Auth.signOut().then(() => {this.props.history.push('/signin')}).catch((err) => {console.log(err)} )}}> Logout </button>}
            </div>
            WELCOME HOME
        </div>
        )
  }
}
 
export default Home;
