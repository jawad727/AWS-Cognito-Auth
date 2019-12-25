import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom"
import {Auth} from "aws-amplify";
import "./home.css"
import { ConsoleLogger } from '@aws-amplify/core';
import {connect} from "react-redux"
import {fetchPosts, fetchUsers} from "../../store/actions/index"
import PostCard from "../posts/PostCard.js"
import PostPage from "../posts/PostPage"
import DiscoverCard from "../discovercards/DiscoverCard"

// Amplify.configure(aws_exports)


var categoryArray = [["ALL", "POLITICAL", "TECHNOLOGY", "SPORTS", "ANIMALS", "ART", "MISC"], ["POLITICAL"], ["TECHNOLOGY"], ["SPORTS"], ["ANIMALS"], ["ART"], ["MISC"]]


class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loading: true,
          username: "",
          posts: [],
          postsLoaded: 6,
          currentTab: categoryArray[0]
      }
  }

  componentDidUpdate() {
    
  }

  componentDidMount() {
    Auth.currentSession().then((user) => console.log(user.accessToken.payload)).catch((err) => {console.log(err)} )
    this.props.fetchPosts()
    setTimeout(() => this.setState({loading: false}), 500);
    // this.props.fetchPosts()
    console.log(this.props.allPostsArray)
  }

  accessTokenObj = localStorage.getItem("jwt")


  render() {

    console.log(this.props.usersArray)
    console.log(this.state.currentTab)
    

      return (
        
        <>
        {this.state.loading ? 
        
        <div className="spinnerContainer"> 
          <i class="fas fa-spinner fa-3x"></i> 
        </div> : 

        <div className="HomeContainer" >

        
           
            {/* {`WELCOME HOME ${this.state.username} !!`} */}
          <div className="DiscoverOtherTextDisplay">
            <p> Discover Other Users </p>
          </div>

          <div className="DiscoverCardsContainer" >
          {this.props.usersArray.map((item) => {
            return <DiscoverCard content={item} history={this.props.history} />
          }).slice(0, 5)}
          </div>
          

          <h3> {`Browse ${this.state.currentTab[0].toLowerCase()} Articles`}</h3>

          <div className="AllPostOrganizer" >
            {categoryArray.map((item, i) => {
              
            return (<div className={categoryArray[i][0] == this.state.currentTab[0] ? `${"HighlightedTab"}` : null} onClick={() => {this.setState({currentTab: categoryArray[i]}) }}  > {categoryArray[i][0]} </div>)

          })}
          </div>
          <div className="AllPostsContainer">
            
            {this.props.allPostsArray.map((item) => {
              if ( this.state.currentTab.includes(item.PostCategory.toUpperCase())  ) {
              return <PostCard content={item} history={this.props.history}/> }
             } )
            //  .slice(0, this.state.postsLoaded) 
             }
             
          </div>
          
          
            
        </div>
            }
        </>

    )
  }
}
 
const mapStateToProps = state => ({
  usersArray: state.usersArray,
  allPostsArray: state.allPostsArray

})

export default connect(mapStateToProps, {fetchPosts, fetchUsers} )(Home);
