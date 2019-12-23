import React, {Component} from 'react'
import PostCard from "../posts/PostCard.js"
import "./profile.css"
import {fetchPostsByUser} from "../../store/actions/index"
import {connect} from "react-redux"
// import EditProfile from "../editProfile/EditProfile"

class Profile extends Component {
      state = {
         
      }

      componentDidMount() {
        this.props.fetchPostsByUser(this.props.content.uuid)
      }
      

    

    render() {

        console.log(this.props.content)
        console.log(this.props.allPostsByUser)

        return (
            <div className="ProfileContainer" >
                {/* <div className="EditHeaderModuleContainer" onClick={() => {console.log("CLICKed")}}>
                    <EditProfile/>
                </div> */}
                
                <div className="ProfileContentContainer">
                    <div className="ProfileHeader" style={{ backgroundImage: `url(${this.props.content.Header})` }}>
                        <i class="fas fa-cog fa-2x"></i>
                    </div>
                    <div className="ProfileAVI" style={{ backgroundImage: `url(${this.props.content.Profpic})`}}/>
                    <div className="ProfileUserInfo" >
                        <h2>{this.props.content.DisplayName}</h2>
                        <p>{`@${this.props.content.Username}`}</p>
                        <p>{this.props.content.Bio}</p>
                        <div className="PostJoinedDiv">
                            <p>{`Posts: ${this.props.allPostsByUser.length}`}</p>
                            <p>{`Joined ArticleHub On ${this.props.content.date.slice(0, 17)}`}</p>
                        </div>
                        {/* <p>{`Posts: ${this.props.allPostsByUser.length}`}</p> */}
                    </div>
                    
                </div>
                <div className="postOrginizer">
                    <p>All Posts</p> 
                </div>
                <div className="SingleProfilePosts">
                    {this.props.allPostsByUser.map((item) => {
                        
                        return <PostCard content={item} history={this.props.history}/> 
                    } )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allPostsByUser: state.allPostsByUser,
    
  })


export default connect(mapStateToProps, {fetchPostsByUser})(Profile);