import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom"
import {Auth} from "aws-amplify";
import "./home.css"
import { ConsoleLogger } from '@aws-amplify/core';
import {connect} from "react-redux"
import {fetchPosts} from "../../store/actions/index"
import PostCard from "../posts/PostCard.js"
// Amplify.configure(aws_exports)


class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loading: true,
          username: "",
          posts: []
      }
  }

  componentDidUpdate() {
    
  }

  componentDidMount() {
    // Auth.currentSession().then((user) => this.setState({loading: false, username: user.accessToken.payload.username})).catch((err) => {console.log(err)} )
    
    // this.props.fetchPosts()
    console.log(this.props.allPostsArray)
  }

  accessTokenObj = localStorage.getItem("jwt")


  render() {

    console.log(this.props.allPostsArray)
    

      return (
        <div className="HomeContainer" >
            <div className="Nav"> 
                <h3> ResearchPal </h3> {this.state.loading ? null : <button onClick={() => {Auth.signOut().then(() => {this.props.history.push('/signin')}).catch((err) => {console.log(err)} )}}> Logout </button>}
            </div>
            {`WELCOME HOME ${this.state.username} !!`}

          <div className="AllPostsContainer">
            
            {this.props.allPostsArray.map((item) => {
              return <PostCard content={item} />
             } )}
             
          </div>

        </div>
        )
  }
}
 
const mapStateToProps = state => ({

  allPostsArray: state.allPostsArray

})

export default connect(mapStateToProps, {fetchPosts} )(Home);
