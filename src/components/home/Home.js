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
import {TweenMax} from "gsap"


var categoryArray = [["ALL", "POLITICAL", "TECHNOLOGY", "SPORTS", "ANIMALS", "ART", "MISC"], ["POLITICAL"], ["TECHNOLOGY"], ["SPORTS"], ["ANIMALS"], ["ART"], ["MISC"]]

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loading: true,
          username: "",
          posts: [],
          postsLoaded: 6,
          currentTab: categoryArray[0],
          showDiscoverCards: true
      }
  }

  componentDidMount() {
    Auth.currentSession().then((user) => console.log(user.accessToken.payload)).catch((err) => {console.log(err)} )
    this.props.fetchPosts()
    setTimeout(() => this.setState({loading: false}), 500);
  }

  closeOpenDiscoverCards(height) {
    TweenMax.to(".DiscoverCardsContainer", .8, { height: height });
    this.setState({showDiscoverCards: !this.state.showDiscoverCards})
  }

  filterArray() { return this.props.allPostsArray.filter(item => {
    return this.state.currentTab.includes(item.PostCategory.toUpperCase())
  }) }

  accessTokenObj = localStorage.getItem("jwt")

  capitalizer() {
    var singleCatagory = this.state.currentTab[0].toLowerCase().split("")
    var firstLetter = this.state.currentTab[0][0]
    singleCatagory.shift()
    singleCatagory.unshift(firstLetter)

    return(singleCatagory.join(""))
  }

  render() {

    console.log(this.capitalizer())

      return (
        
        <>
        {this.state.loading ? 
        
        <div className="spinnerContainer"> 
          <i class="fas fa-spinner fa-3x"></i> 
        </div> : 

        <div className="HomeContainer" >

          <div className="DiscoverOtherTextDisplay">
            <p> Discover Other Users </p>
            { this.state.showDiscoverCards ?
            <i class="fas fa-sort-down" onClick={() => {this.closeOpenDiscoverCards("0px")} }></i> :
            <i class="fas fa-sort-up" onClick={() => this.closeOpenDiscoverCards("192px")} style={{marginTop: "15px"}}></i> }
          </div>

 
            <div className="DiscoverCardsContainer" >
            {this.props.usersArray.map((item) => {
              return <DiscoverCard className="DiscoverCard1" content={item} history={this.props.history} />
            }).slice(0, 5)}
            </div>
       
          

          <h3> {`Browse ${this.capitalizer()} Articles`}</h3>

          <div className="AllPostOrganizer" >
            {categoryArray.map((item, i) => {
              
            return (<div className={categoryArray[i][0] == this.state.currentTab[0] ? `${"HighlightedTab"}` : null} onClick={() => {this.setState({currentTab: categoryArray[i]}) }}  > {categoryArray[i][0]} </div>)

          })}
          </div>
          <div className="AllPostsContainer">
            
            {this.filterArray().map((item) => {
              
              return <PostCard content={item} history={this.props.history}/> 
             } ).slice(0, this.state.postsLoaded)
             }
             
             { this.filterArray().length < this.state.postsLoaded ? null : <button onClick={() => {this.setState({postsLoaded: this.state.postsLoaded + 6})}}> Load More </button>}
          </div>
          
          
            
        </div>
            }
        </>

    )
  }
}
 
const mapStateToProps = state => ({
  usersArray: state.usersArray,
  allPostsArray: state.allPostsArray,
  signedIn: state.signedIn

})


export default connect(mapStateToProps, {fetchPosts, fetchUsers} )(Home);
