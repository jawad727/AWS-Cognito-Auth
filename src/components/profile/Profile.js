import React, {Component} from 'react'
import PostCard from "../posts/PostCard.js"
import "./profile.css"
import {fetchPostsByUser} from "../../store/actions/index"
import {connect} from "react-redux"
import {Auth} from "aws-amplify";

var categoryArray = [["ALL", "POLITICAL", "TECHNOLOGY", "SPORTS", "ANIMALS", "ART", "MISC"], ["POLITICAL"], ["TECHNOLOGY"], ["SPORTS"], ["ANIMALS"], ["ART"], ["MISC"]]

class Profile extends Component {
      state = {
         loading: true,
         currentTab: categoryArray[0],

      }

      componentDidMount() {
        this.props.fetchPostsByUser(this.props.content.uuid)
        setTimeout(() => this.setState({loading: false}), 500);

        Auth.currentSession().then((ses) => {
            this.setState({username: ses.accessToken.payload.username})
        } ).catch((err) => {console.log(err)} )
      }

      capitalizer() {
        var singleCatagory = this.state.currentTab[0].toLowerCase().split("")
        var firstLetter = this.state.currentTab[0][0]
        singleCatagory.shift()
        singleCatagory.unshift(firstLetter)
        return(singleCatagory.join(""))
      }

    render() {

        console.log(this.props.content.Username)
        console.log(this.state.username)

        return (
            <>

            {this.state.loading ? 
        
            <div className="spinnerContainer"> 
                <i class="fas fa-spinner fa-3x"></i> 
            </div> :

            <div className="ProfileContainer" >
                
                <div className="ProfileContentContainer">
                    <div className="ProfileHeader" style={{ backgroundImage: `url(${this.props.content.Header})` }}>
                        
                    </div>
                    <div className="ProfileAVI" style={{ backgroundImage: `url(${this.props.content.Profpic})`}}/>
                    <div className="ProfileUserInfo" >
                        <div className="ProfNameDiv">
                            <h2>{this.props.content.DisplayName}</h2>
                            { this.props.content.Username == this.state.username ?
                            <button onClick={() => this.props.history.push("/editprofile")}> Edit Profile </button>
                            : null }
                        </div>
                        <p>{`@${this.props.content.Username}`}</p>
                        <p>{this.props.content.Bio}</p>
                        <div className="PostJoinedDiv">
                            <p>{`Posts: ${this.props.allPostsByUser.length}`}</p>
                            <p className="joinedOn">{`Joined ArticleHub On ${this.props.content.date.slice(0, 17)}`}</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="postOrginizer">
                    <p> {this.capitalizer()} Posts </p> 
                </div>

                <div className="AllPostOrganizer" >
                    {categoryArray.map((item, i) => {
                    
                    return (<div className={categoryArray[i][0] == this.state.currentTab[0] ? `${"HighlightedTab"}` : null} onClick={() => {this.setState({currentTab: categoryArray[i]}) }}  > {categoryArray[i][0]} </div>)

                })}
                </div>

                <div className="SingleProfilePosts">
                    {this.props.allPostsByUser.map((item) => {
                        if ( this.state.currentTab.includes(item.PostCategory.toUpperCase())  ) {
                        return <PostCard content={item} history={this.props.history}/> }
                    } )}
                </div>
            </div> }
            </>
        );
    }
}

const mapStateToProps = state => ({
    allPostsByUser: state.allPostsByUser,
    
  })


export default connect(mapStateToProps, {fetchPostsByUser})(Profile);