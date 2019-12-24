import React, {Component} from 'react'
import "./editprofile.css"
import {connect} from "react-redux"
import {fetchSingleUser, updateUser} from "../../store/actions/index"
import {Auth} from "aws-amplify";
import Amplify, {Storage} from "aws-amplify"


class EditProfile extends Component {
      state = {
         DisplayName: "",
         Bio: "",
         Header: "",
         ProfPic: "",
         username: "",
         fileUrl1: "",
         file1: "",
         filename1: ""
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


      handleFileChange = e => {
        const file = e.target.files[0]
        this.setState({
            fileUrl1: URL.createObjectURL(file),
            file1: file,
            filename1: `${this.state.username}/profile/${file.name}`
        })
        console.log(file)
      }


      inputChangeHandler = e => {
        this.setState({ [e.target.name] : e.target.value });
      }


      saveFile = () => {
        Storage.put(this.state.filename1, this.state.file1, {level: 'public', contentType: 'image/png'})
        .then(() => {
          this.props.updateUser(this.state.username, {
            paramName: "Header", 
            paramValue: `https://researchpalimagestoragedev-dev.s3-us-west-2.amazonaws.com/public/${this.state.filename1}` 
          }).then(() => alert("Profile Successfully Updated!"))
        })

        .catch(err => {
            console.log("error uploading file", err)
        })
      }
    

    render() {

        console.log(this.state)

        return (
          
            <div className="EditProfileOuter">
              <h1> Edit Profile </h1>
              <div className="EditProfileContainer">
                <div className="HeaderContainer">
                  <div className="Header" style={{ backgroundImage: `url(${this.state.fileUrl1})` }} />
                  <div className="HeaderButtons">
                    <label className="HiddenInputSpan">
                      <input type="file"  onChange={this.handleFileChange} />
                      <span className="fileUploadSpan" >Upload</span>
                    </label>
                    <button onClick={() => this.saveFile()}> Confirm </button>
                  </div>
                </div>
                <div className="EditContentContainer" >

                  <div className="EditProfilePic">
                    <div className="ProfilePic"  />
                    <div className="ProfPicButtons">
                      {/* <button >Upload</button> */}
                      <label className="HiddenInputSpan2">
                        <input type="file"  onChange={this.handleFileChange} />
                        <span className="fileUploadSpan" >Upload</span>
                      </label>
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