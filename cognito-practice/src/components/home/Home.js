import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom"
import {Auth} from "aws-amplify";
import "./home.css"
import { ConsoleLogger } from '@aws-amplify/core';
import {connect} from "react-redux"
import {fetchPosts} from "../../store/actions/index"
import PostCard from "../posts/PostCard.js"
import PostPage from "../posts/PostPage"
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
           <Route path={`/asd`} render={<PostPage/>} />
            {/* {`WELCOME HOME ${this.state.username} !!`} */}

          <div className="AllPostOrganizer" >
            <div> ALL </div><div> POLITICS </div><div> TECHNOLOGY </div><div> SPORTS </div><div> ANIMALS </div><div> ART </div><div> MISC </div>
          </div>
          <div className="AllPostsContainer">
            
            {this.props.allPostsArray.map((item) => {
              return <PostCard content={item} history={this.props.history}/>
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
