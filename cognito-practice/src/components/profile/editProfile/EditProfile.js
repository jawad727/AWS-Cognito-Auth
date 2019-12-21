import React, {Component} from 'react'
import "./editprofile.css"
import {connect} from "react-redux"


class EditProfile extends Component {
      state = {
         
      }



    

    render() {

        // console.log(this.props.content)
        // console.log(this.props.allPostsByUser)

        return (
          
            <div className="EditHeaderModule">
              <div className="EditDivider">
                <p>Edit Profile</p>
                <p>Edit AVI</p>
                <p>Edit Header</p>
              </div>
              <div className="EditProfileAttributes">
                <p>Change Displayname</p>
                <input />
                <p>Change Bio</p>
                <input />
              </div>
            </div>
   
        );
    }
}

const mapStateToProps = state => ({

    
  })


export default connect(mapStateToProps, null)(EditProfile);