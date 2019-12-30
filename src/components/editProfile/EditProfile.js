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
         filename1: "",
         fileUrl2: "",
         file2: "",
         filename2: ""
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


      handleFileChange = e => {
        const file = e.target.files[0]
        this.setState({
            fileUrl1: window.URL.createObjectURL(file),
            file1: file,
            filename1: `${this.state.username}/profile/header/${file.name}`
        })
        console.log(file)
      }

      handleFileChange2 = e => {
        const file = e.target.files[0]
        this.setState({
            fileUrl2: window.URL.createObjectURL(file),
            file2: file,
            filename2: `${this.state.username}/profile/profilepic/${file.name}`
        })
        console.log(file)
      }


      saveFile = () => {
        Storage.put(this.state.filename1, this.state.file1, {level: 'public', contentType: 'image/png'})
        .then(() => {
          this.props.updateUser(this.state.username, {
            paramName: "Header", 
            paramValue: `https://researchpalimagestoragedev-dev.s3-us-west-2.amazonaws.com/public/${this.state.filename1}` 
          }).then(() => alert("Profile Header Successfully Updated!"))
        })
        .catch(err => {
            console.log("error uploading file", err)
        })
      }

      saveFile2 = () => {
        Storage.put(this.state.filename2, this.state.file2, {level: 'public', contentType: 'image/png'})
        .then(() => {
          this.props.updateUser(this.state.username, {
            paramName: "Profpic", 
            paramValue: `https://researchpalimagestoragedev-dev.s3-us-west-2.amazonaws.com/public/${this.state.filename2}` 
          }).then(() => alert("Profile Picture Successfully Updated!"))
        })
        .catch(err => {
            console.log("error uploading file", err)
        })
      }
    

    render() {

        console.log(this.state)
        console.log(this.props.singleUser)

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
                    <div className="ProfilePic" style={{ backgroundImage: `url(${this.state.fileUrl2})`, backgroundSize: "cover", backgroundPosition: "center" }}  />
                    <div className="ProfPicButtons">
                      {/* <button >Upload</button> */}
                      <label className="HiddenInputSpan2">
                        <input type="file"  onChange={this.handleFileChange2} />
                        <span className="fileUploadSpan" >Upload</span>
                      </label>
                      <button onClick={() => this.saveFile2()}>Confirm</button>
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