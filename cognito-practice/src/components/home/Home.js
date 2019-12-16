import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom"
import {Auth} from "aws-amplify";
import "./home.css"
import { ConsoleLogger } from '@aws-amplify/core';
import {connect} from "react-redux"
import {fetchPosts} from "../../store/actions/index"
import PostCard from "../posts/PostCard.js"
import PostPage from "../posts/PostPage"
import DiscoverCard from "../discovercards/DiscoverCard"

// Amplify.configure(aws_exports)


var categoryArray = [["ALL", "POLITICS", "TECHNOLOGY", "SPORTS", "ANIMALS", "ART", "MISC"], ["POLITICS"], ["TECHNOLOGY"], ["SPORTS"], ["ANIMALS"], ["ART"], ["MISC"]]


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
    // Auth.currentSession().then((user) => this.setState({loading: false, username: user.accessToken.payload.username})).catch((err) => {console.log(err)} )
    
    // this.props.fetchPosts()
    console.log(this.props.allPostsArray)
  }

  accessTokenObj = localStorage.getItem("jwt")


  render() {

    console.log(this.props.usersArray)
    console.log(this.state.currentTab)
    

      return (
        <div className="HomeContainer" >
           
            {/* {`WELCOME HOME ${this.state.username} !!`} */}
          <div className="DiscoverOtherTextDisplay">
            <p> Discover Other Users </p>
          </div>

          <div className="DiscoverCardsContainer" >
          {this.props.usersArray.map((item) => {
            return <DiscoverCard content={item}/>
          })}
          </div>
          

          <h3> Browse All Articles </h3>

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
          {/* {this.state.postsLoaded > this.props.allPostsArray.length ? null : <button onClick={ () => {this.setState({postsLoaded: this.state.postsLoaded + 6 })}}> Load More </button> } */}
          
        </div>
        )
  }
}
 
const mapStateToProps = state => ({
  usersArray: state.usersArray,
  allPostsArray: state.allPostsArray

})

export default connect(mapStateToProps, {fetchPosts} )(Home);
