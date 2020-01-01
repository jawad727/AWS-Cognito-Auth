import React, {Component} from 'react'
import {connect} from "react-redux"
import "./postform.css"
import Amplify, {Storage} from "aws-amplify"
import {Auth} from "aws-amplify";
import {makePost} from "../../store/actions/index"

const makeapost =  { 
userID: "myuserid",
 PostName: "Post works from postform!",
 PostDescription: "This article discusses how tests and how they effect testing in a test environment while testing tests. ",
 PostCategory: "Animals",
 PostImage: "https",
 SiteURL: "https",
 Username: "mydisplayname"
}


class PostForm extends Component {
      state = {
         username: "",
         client_id: "",
         fileUrl: "",
         file: "",
         filename: "",
         imageConfirmed: false,
         postTitle: "",
         postDescription: "",
         articleURL: "",
         PostCategory: "",
         loading: true
      }


    componentDidMount() {
        Auth.currentSession().then((ses) => {
            this.setState({username: ses.accessToken.payload.username, client_id: ses.accessToken.payload.client_id})
        } ).catch((err) => {console.log(err)} )
        setTimeout(() => this.setState({loading: false}), 400);
    } 


    inputChangeHandler = e => {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleChange = e => {
          const file = e.target.files[0]
          this.setState({
              fileUrl: window.URL.createObjectURL(file),
              file: file,
              filename: `${this.state.username}/${file.name}`
          })
          console.log(file)
    }
      
    saveFile = () => {
          Storage.put(this.state.filename, this.state.file, {expires: Date.now() + 60 , level: 'public', contentType: 'image/png'})
          .then(() => {

              console.log("successfully saved file!", `${this.state.filename}`)

              Storage.get(`${this.state.filename}`).then(data => {

                  console.log("GETIMAGE WORKS!!!!")

                this.setState({
                    fileUrl: data
                })
            })

          })
          .catch(err => {
              console.log("error uploading file", err)
          })
    }
    

    render() {
            console.log(this.state.fileUrl.length)
            // console.log(this.state.fileUrl)

        return (
            <>

        {/* {this.state.loading ? 
        
        <div className="spinnerContainer"> 
          <i class="fas fa-spinner fa-3x"></i> 
        </div> :  */}

            <>
            <p className="mobileView">Sorry, you cannot share an article on a mobile device. Come back on pc or mac to create a post.</p>
            <div className="PostFormPageContainer pcView" >
                 <h1> Upload An Article </h1>
                <div className="PostFormContainer" >
                    <div className={`PostImageContainer ${this.state.imageConfirmed ? "PostImageContainerHighlight" : null}`}>
                    {this.state.fileUrl.length > 0 ? null :
                        <label>
                            <input className="hiddenInput" type="file"  onChange={this.handleChange} />
                            <span className="fileUploadSpan" >Upload Image</span>
                    </label> }

                        <div className="form1image" style={{backgroundImage: `url(${this.state.fileUrl})`, backgroundSize: "cover"}} />
                        <p> (Make sure dimensions of image are equal or close) </p>
                        {this.state.fileUrl.length > 5 ? <button className="ConfirmButton" onClick={() => {this.saveFile(); this.setState({imageConfirmed: true}) } }> Confirm Image </button> : null}
                    </div>
                    <div className="PostContentContainer" >
                        <form>
                            <p> Title </p>
                            <input name="postTitle" className="TitleInput" onChange={this.inputChangeHandler} />
                            <p> Description </p>
                            <textarea name="postDescription" className="DescriptionInput" onChange={this.inputChangeHandler} type="text" cols="38" rows="5" />
                            <p> Article URL </p>
                            <input name="articleURL" onChange={this.inputChangeHandler} />
                            <p> Select Category</p>
                            <select name="PostCategory" onChange={this.inputChangeHandler} className="PostCategorySelector">
                                <option ></option>
                                <option value="Misc">Misc</option>
                                <option value="Political">Political</option>
                                <option value="Technology">Technology</option>
                                <option value="Sports">Sports</option>
                                <option value="Animals">Animals</option>
                                <option value="Art">Art</option>
                            </select>
                            
                            
                        </form>
                    </div>
                
                </div>
                <button className="UploadButton" onClick={() => {
                    if (this.state.postTitle.length == 0 || this.state.postDescription.length == 0 || this.state.fileUrl.length == 0 || this.state.articleURL.length == 0 || this.state.imageConfirmed == false) 
                    {alert("Fill in every box and coonfirm image before making a post.");} else {

                    
                    this.props.makePost({
                    userID: this.state.username,
                    PostName: this.state.postTitle,
                    PostDescription: this.state.postDescription,
                    PostCategory: this.state.PostCategory,
                    PostImage: `https://researchpalimagestoragedev-dev.s3-us-west-2.amazonaws.com/public/${this.state.filename}`,
                    SiteURL: this.state.articleURL,
                    Username: this.state.username
                })
                setTimeout(() => this.props.history.push("/home"), 1500);
                // .then(this.props.history.push("/home"))
                 } }} > upload </button>
              
            </div>
            </> 

            
            </>
        );
    }
}

const mapStateToProps = state => ({
    
  })


export default connect(mapStateToProps, {makePost})(PostForm);