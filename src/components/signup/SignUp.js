import React, { Component } from 'react';
import {Auth} from "aws-amplify";
import "./signin.css"
import {connect} from "react-redux"
import {postUser} from "../../store/actions/index"

class SignUp extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            username: '',
            password: '',
            phone_number: '',
            email: '',
            confirmationCode: '',
            verified: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signUp = this.signUp.bind(this);
        this.confirmSignUp = this.confirmSignUp.bind(this);
    }

    componentDidMount() {
      Auth.currentSession().then((ses) => console.log(ses)).catch((err) => {console.log(err)} )
  }
  
    signUp() {
        const { username, password, email, phone_number } = this.state;  

        if (password.length < 8 || username.length < 5 ) {
          alert("ERROR: Make sure the password is at least 8 characters and the username is at least 5.")
        } else { 
        Auth.signUp({
            username: username.toLowerCase(),
            password: password,
            attributes: {
                email: email,
                phone_number: phone_number,
            }
        })
        .then((res) => {
          this.props.postUser({
            uuid: this.state.username.toLowerCase(),
            Username: this.state.username.toLowerCase(),
            Email: this.state.email,
            PhoneNumber: this.state.phone_number,
            DisplayName: this.state.username
            });
            this.setState({
              verified: true
            });
            console.log('Successfully signed up 1');
        })
        .catch((err) => console.log(`Error signing up: ${ err }`))
      }
    }
  
    confirmSignUp() {
        const { username, password, confirmationCode } = this.state;
        Auth.confirmSignUp(username.toLowerCase(), confirmationCode)
        .then(() => {
          Auth.signIn({ username: username.toLowerCase(), password: password })
          .then(() => {
            this.props.history.push("./home")
            console.log("user created")
          })
          
        })
        .catch((err) => console.log(`Error confirming sign up - ${ err }`))
    }
  
    handleSubmit(e) {
        
      const { verified } = this.state;
  
        e.preventDefault();
  
        if (verified) {
          this.confirmSignUp();
        } else {
          this.signUp()
        }
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
        } else if (e.target.id === 'phone_number') {
          this.setState({
              phone_number: e.target.value
          });
        } else if (e.target.id === 'email') {
          this.setState({
              email: e.target.value
          });
        } else if (e.target.id === 'confirmationCode') {
          this.setState({
              confirmationCode: e.target.value
          });
        }
    }
  
    render() {

      const { verified } = this.state;
      if (verified) {
          return (
              <div className="SignUp" >

                  <p className="confirmationText">A confirmation code has been sent to your email address</p>
                  <form onSubmit={ this.handleSubmit }>
                   
                  
                      <label>Confirmation Code</label>
                      <input id='confirmationCode' type='text' onChange={ this.handleChange }/>
                      <button>Confirm Sign up</button>
                  </form>
                  <button className="confirmationButton" >
                    Remind Me Later
                  </button>
              </div>
          );
      } else {
        return (
          <div className="SignUp" >
            <img className="RegisterIcon" src="https://webstockreview.net/images/document-clipart-registration-form-1.png" />
            <h3>Hey, welcome to ArticleHub!</h3>
            <p className="fineprint">Tell us a little about yourself.</p>
            <form onSubmit={ this.handleSubmit }>
                <label>Username</label>
                <input id='username' type='text' onChange={ this.handleChange }/>
                <label>Password ( at least 8 characters )</label>
                <input id='password' type='password' onChange={ this.handleChange }/>
                <label>Phone Number</label>
                <input id='phone_number' type='text' onChange={ this.handleChange }/>
                <label>Email</label>
                <input id='email' type='text' onChange={ this.handleChange }/>
                <button>Sign up</button>
            </form>
            <p className="ClickHere" onClick={() => this.props.history.push("/signin")}>Already have an account? Click here!</p>
          </div>
        );
      }
    }
}


const mapStateToProps = state => ({
    
  })
  
  export default connect(mapStateToProps, {postUser})(SignUp);
