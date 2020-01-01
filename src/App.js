import React, {Component} from 'react';
import './App.css';
import Amplify from "aws-amplify"
import {Auth} from "aws-amplify";
import aws_exports from './aws-exports'
import { withAuthenticator } from "aws-amplify-react";
import SignUp from "./components/signup/SignUp"
import SignIn from "./components/signup/SignIn"
import Home from "./components/home/Home"
import LandingPage from "./components/landingpage/LandingPage"
import Profile from "./components/profile/Profile"
import PostPage from "./components/posts/PostPage"
import PostForm from "./components/postform/PostForm"
import EditProfile from "./components/editProfile/EditProfile"
import Authenticate from "./components/requireAuth/Authenticate"
import { Route, Switch } from "react-router-dom"
import {connect} from "react-redux"
import blueLogo from "../src/hiclipart.png"

import {fetchUsers, fetchPosts, fetchPostsByUser} from "./store/actions/index"
import PostForm2 from './components/postform/PostForm2';

Amplify.configure(aws_exports)

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        signedUp : false,
          loading: true,
          homeLoad: true,
          username: ""
      }
      this.handleSignup = this.handleSignup.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts()
    Auth.currentSession()
    .then((user) => this.setState({loading: false, username: user.accessToken.payload.username}))
    .catch((err) => {console.log(err)} )
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
          
          <div className="Nav"> 
            <div className="innerNav">
            
                <div className="ArticleHubLogo">
                  <img className="blueLogo" src={blueLogo}  />
                  <h3 onClick={() => this.props.history.push('/home')}> ArticleHub </h3>
                </div> 
                {this.state.loading ? 
                <div>
                  <button onClick={() => this.props.history.push("/signin")} className="LoginNavButton" > Login </button>
                  <button onClick={() => this.props.history.push("/signup")}> Register </button>
                </div> :
                <div>
                  <i class="far fa-plus-square fa-2x" title="Make A Post" onClick={() => {this.props.history.push('/postform')}}></i>
                  <i class="far fa-user fa-2x" title="View Your Profile" onClick={() => this.props.history.push(`/${this.state.username}`)}></i>
                  <button onClick={() => {Auth.signOut().then(() => {this.props.history.push('/signin')}).catch((err) => {console.log(err)} )}}> Logout </button>
                </div> }
            </div>
          </div>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUp} handleSignup={ this.handleSignup } />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/postform" component={Authenticate(PostForm)} usersignedin={true} />
        <Route exact path="/editprofile" component={Authenticate(EditProfile) } />
        
        {this.props.usersArray.map(item => {
          return <Route path={`/${item.Username}`} render={(props) => <Profile {...props}  content={item} />} />
        })}

        {this.props.allPostsArray && this.props.allPostsArray.map(item => {
          return <Route path={`/${item.uid}`} render={(props) => <PostPage {...props}  content={item} />} />
        })}

        
        </Switch>
        </div>
        )
  }
}
 
const mapStateToProps = state => ({
    usersArray: state.usersArray,
    allPostsArray: state.allPostsArray,
    allPostsByUser: state.allPostsByUser
  })
  
  export default connect(mapStateToProps, {fetchUsers, fetchPosts, fetchPostsByUser})(App);
