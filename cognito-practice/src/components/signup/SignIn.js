import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import "./signin.css"

class SignIn extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            user: null,
            username: '',
            password: '',
            signedIn: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signIn = this.signIn.bind(this);
        this.confirmSignIn = this.confirmSignIn.bind(this);
    }

    componentDidMount() {
        Auth.currentSession().then((ses) => console.log(ses)).catch((err) => {console.log(err)} )
    }
  
    signIn(e) {
        e.preventDefault();
        const { username, password } = this.state;  
        Auth.signIn({
            username: username,
            password: password
        })
        .then((user) => {
            console.log(user, user.signInUserSession.idToken.jwtToken);
            localStorage.setItem('jwt', user.signInUserSession.accessToken.jwtToken);
            this.setState({user: user})
            this.props.history.push('/home')
    })
        .catch((err) => console.log(`Error signing in: ${ err }`))
    }
  
    confirmSignIn() {
        const { username } = this.state;
        Auth.confirmSignIn(username)
        .then(() => console.log('successfully confirmed signed in'))
        .catch((err) => console.log(`Error confirming sign up - ${ err }`))
    }
  
    handleSubmit(e) {
        e.preventDefault();

        this.signIn();
        this.confirmSignIn()
        this.setState({
            username: '',
            password: '',
            signedIn: true
        });
        e.target.reset();
    }
  
    handleChange(e) {
        if (e.target.id === 'username') {
          this.setState({
              username: e.target.value
          });
        } else if (e.target.id === 'password') {
          this.setState({
              password: e.target.value
          });
        }
    }
  
    render() {
        // console.log(this.state.user)
        Auth.currentSession().then((ses) => console.log(ses)).catch((err) => {console.log(err)} )

      const { signedIn } = this.state;
      if (signedIn) {
          return (
              <div>
                  <h1>You have signed in!</h1>
              </div>
          );
      } else {
        return (
          <div className="SignUp" >

            <img className="WavingHand" src="https://webstockreview.net/images/clipart-hand-wave-goodbye.png" />
            <h3>Hey, good to see you again!</h3>
            <p className="fineprint">Log in to get going.</p>
            <form className="SignupForm" onSubmit={ this.signIn }>
                <label>Username</label>
               
                <input id='username' type='text' onChange={ this.handleChange }/>
                <label>Password</label>
                <input id='password' type='password' onChange={ this.handleChange }/>
                <button>Sign In</button>
            </form>
            <p className="ClickHere" onClick={() => this.props.history.push("/signup")}>Dont have an account? Click here!</p>
          </div>
        );
      }
    }
}

export default SignIn
