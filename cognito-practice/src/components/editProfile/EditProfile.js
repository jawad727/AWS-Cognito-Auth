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
          
            <div className="EditProfileOuter">
              <div className="EditProfileContainer">
                <div className="HeaderContainer">
                  <div />
                  <button> Upload </button>
                  <button> Confirm </button>
                </div>
                <div className="EditContentContainer" >

                  <div className="EditProfilePic">
                    <div className="ProfilePic" />
                    <div className="ProfPicButtons">
                      <button>Update</button>
                      <button>Confirm</button>
                    </div>
                  </div>
                  <div className="EditContent">
                    <p>Display Name</p>
                    <form>
                      <input className="NameInput" />
                      <button>Update</button>
                    </form>

                    <p>Bio</p>
                    <form>
                    <textarea className="BioInput" name="BioDescription" type="text" cols="38" rows="10" />
                      <button>Update</button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
   
        );
    }
}

const mapStateToProps = state => ({
  singleUser: state.singleUser
    
  })


export default connect(mapStateToProps, {fetchSingleUser})(EditProfile);