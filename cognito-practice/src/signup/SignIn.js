import React, { Component } from 'react';
import {Auth} from "aws-amplify";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            signedIn: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const { signedIn, username, password} = this.state;

        if (!signedIn) {
            Auth.signIn({
                username: username,
                password: password
            })
            .then(() => console.log("signed in"))
            .catch((err) => console.log(err))

            Auth.confirmSignIn(username)
            .then(() => console.log("confirmed sign up"))
            .catch((err) => console.log(err))

            this.setState({
                signedIn: true
            })

        }
        
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    render () {
        const { signedIn } = this.state;

        if (signedIn) {
            return (
                <h1>You have signed in!</h1>
            )
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>UserName</label>
                    <input type="text" name="username" onChange={ this.handleChange } />
                    <label>Password</label>
                    <input type="text" name="password" onChange={ this.handleChange } />
                    <button>Sign In</button>
                </form>
              );
        }

        
    }
  
}

export default SignIn
