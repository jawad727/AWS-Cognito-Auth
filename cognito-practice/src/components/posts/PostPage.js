import React, {Component} from 'react';
import {connect} from "react-redux"
import { fetchComments, postComment } from "../../store/actions/index"
import {Auth} from "aws-amplify";
import axios from 'axios'

class PostPage extends Component {
  state = {
    text: "",
    postid: this.props.content.uid,
    username: ""
  }

  componentDidMount() {
    this.props.fetchComments(this.props.content.uid);
    Auth.currentSession().then((user) => this.setState({username: user.accessToken.payload.username}) ).catch((err) => {console.log(err)} )
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  baseURL = "https://u242fne979.execute-api.us-east-1.amazonaws.com/dev"

  upvote = (e) => {
    e.preventDefault();
    axios.put(`${this.baseURL}/post/${this.props.content.uid}`, {
      paramName: "PostLikes",
      paramValue: this.props.content.PostLikes + 1
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

  downvote = (e) => {
    e.preventDefault();
    axios.put(`${this.baseURL}/post/${this.props.content.uid}`, {
      paramName: "PostLikes",
      paramValue: this.props.content.PostLikes - 1
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  

  render() {

    console.log(this.props.postComments)
    console.log(this.props.content)
    // console.log(this.state)
    console.log(this.state)

      return (
        <div className="backgroundPostContainer">
            <h1>{this.props.content.PostName}</h1>
           <div className="singlePostContainer" >
                <a target="_blank" href={this.props.content.SiteURL}>
                    <div className="singlePostImage" style={{ backgroundImage: `url(${this.props.content.PostImage})`}} />
                </a>
                <div className="singlePostContent">
                    <h3>{this.props.content.Username}</h3>
                    <div className="commentsArea" >
                        { this.props.postComments.map(item => {
                            return <p> <strong> {`${item.username}:`} </strong> {`${item.text}`} </p>
                        }) }
                    </div>
                    <div className="contentLowerHalf" >
                        <div className="likeCommentDiv" >
                            <i class="far fa-heart fa-2x" onClick={this.upvote}></i>
                            <i class="far fa-comment fa-2x"></i>
                        </div>
                        <p className="amountOfLikes">{`${this.props.content.PostLikes} Likes`}</p>
                        <p className="displaynameText" ><strong>{ `${this.props.content.Username}:`}</strong> {`${this.props.content.PostDescription}`}</p>
                        <form onSubmit={(e) => {e.preventDefault(); this.props.postComment(this.state)} }>
                            <input name="text" onChange={this.changeHandler} type="text" placeholder="add a comment" rows="2" />
                            
                        </form>
                    </div>
                    
                </div>
           </div>
        </div>
        )
  }
}
 
const mapStateToProps = state => ({

    postComments: state.postComments

})

export default connect(mapStateToProps, {fetchComments, postComment} )(PostPage);

// export default PostPage

// fetchComments