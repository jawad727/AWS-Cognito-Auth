import React, {Component} from 'react'
import "./editprofile.css"
import {connect} from "react-redux"
import {fetchSingleUser} from "../../store/actions/index"
import {Auth} from "aws-amplify";


class EditProfile extends Component {
      state = {
         
      }

      componentDidMount() {
        Auth.currentSession()
        .then((user) => this.props.fetchSingleUser(user.accessToken.payload.username)  )
        .catch((err) => {console.log(err)} )
        
      }

    

    render() {

        console.log(this.props.singleUser)

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
  singleUser: state.singleUser
    
  })


export default connect(mapStateToProps, {fetchSingleUser})(EditProfile);