import React, {Component} from 'react'
import "./editprofile.css"
import {connect} from "react-redux"
import {fetchSingleUser, updateUser} from "../../store/actions/index"
import {Auth} from "aws-amplify";


class EditProfile extends Component {
      state = {
         DisplayName: "",
         Bio: "",
         Header: "",
         ProfPic: "",
         username: ""
      }

      componentDidMount() {
        Auth.currentSession()
        .then((user) => {
          this.setState({username: user.accessToken.payload.username})
          this.props.fetchSingleUser(user.accessToken.payload.username)
     
          .then(() => { this.setState({
            DisplayName: this.props.singleUser.DisplayName, 
            Bio: this.props.singleUser.Bio,
            Header: this.props.singleUser.Header,
            ProfPic: this.props.singleUser.Profpic
          }) })})
        .catch((err) => {console.log(err)} )
      }

      inputChangeHandler = e => {
        this.setState({ [e.target.name] : e.target.value });
    }
    

    render() {

        console.log(this.state)

        return (
          
            <div className="EditProfileOuter">
              <h1> Edit Profile </h1>
              <div className="EditProfileContainer">
                <div className="HeaderContainer">
                  <div className="Header"/>
                  <div className="HeaderButtons">
                    <button> Upload </button>
                    <button> Confirm </button>
                  </div>
                </div>
                <div className="EditContentContainer" >

                  <div className="EditProfilePic">
                    <div className="ProfilePic" />
                    <div className="ProfPicButtons">
                      <button>Upload</button>
                      <button>Confirm</button>
                    </div>
                  </div>
                  <div className="EditContent">
                    <p>Display Name</p>
                    <form>
                      <input onChange={this.inputChangeHandler} value={this.state.DisplayName} className="NameInput" name="DisplayName"/>
                      <button onClick={(e) => {e.preventDefault(); this.props.updateUser(this.state.username, {paramName: "DisplayName", paramValue: this.state.DisplayName })}} >Update</button>
                    </form>

                    <p>Bio</p>
                    <form>
                    <textarea onChange={this.inputChangeHandler} value={this.state.Bio} className="BioInput" name="Bio" type="text" cols="38" rows="9" />
                      <button onClick={(e) => {e.preventDefault(); this.props.updateUser(this.state.username, {paramName: "Bio", paramValue: this.state.Bio })}}>Update</button>
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


export default connect(mapStateToProps, {fetchSingleUser, updateUser})(EditProfile);