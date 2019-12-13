import React, {Component} from 'react'
// import "./postCard.css"
import "./profile.css"

class Profile extends Component {
      state = {
         
      }
      

    

    render() {

        console.log(this.props.content)

        return (
            <div className="ProfileContainer" >
                <div className="ProfileContentContainer">
                    <div className="ProfileHeader" style={{ backgroundImage: `url(${this.props.content.Header})` }} />
                    <img className="ProfileAVI" src={this.props.content.Profpic}/>
                    <p> PROFILE </p>
                </div>
               
            </div>
        );
    }
}

export default Profile