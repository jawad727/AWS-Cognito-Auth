import React, {Component} from 'react'
import PostCard from "../posts/PostCard.js"
import "./profile.css"
import {fetchPostsByUser} from "../../store/actions/index"
import {connect} from "react-redux"

var categoryArray = [["ALL", "POLITICAL", "TECHNOLOGY", "SPORTS", "ANIMALS", "ART", "MISC"], ["POLITICAL"], ["TECHNOLOGY"], ["SPORTS"], ["ANIMALS"], ["ART"], ["MISC"]]

class Profile extends Component {
      state = {
         loading: true,
         currentTab: categoryArray[0]
      }

      componentDidMount() {
        this.props.fetchPostsByUser(this.props.content.uuid)
        setTimeout(() => this.setState({loading: false}), 500);
      }
      

    

    render() {

        console.log(this.props.content)
        console.log(this.props.allPostsByUser)

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
                            <button onClick={() => this.props.history.push("/editprofile")}> Edit Profile </button>
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
                    <p>{this.state.currentTab[0]} Posts</p> 
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