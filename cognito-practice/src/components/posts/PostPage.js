import React, {Component} from 'react';
import {connect} from "react-redux"
import { fetchComments } from "../../store/actions/index"


class PostPage extends Component {
  state = {

  }

  componentDidMount() {
    this.props.fetchComments(this.props.content.uid)
  }

  render() {

    
    console.log(this.props.postComments)
    console.log(this.props.content)

      return (
        <div className="backgroundPostContainer">
           <div className="singlePostContainer" >
                <div className="singlePostImage" />

                <div className="singlePostContent">
                    <h3>{this.props.content.Username}</h3>
                    <div className="commentsArea" >
                        { this.props.postComments.map(item => {
                            return <p> {`${item.username}:`} {`${item.text}`} </p>
                        }) }
                    </div>
                    <div className="contentLowerHalf" >
                        <div className="likeCommentDiv" >
                            <i class="far fa-heart fa-2x"></i>
                            <i class="far fa-comment fa-2x"></i>
                        </div>
                        <p>{`${this.props.content.PostLikes} Likes`}</p>
                        <p>{`${this.props.content.Username}: ${this.props.content.PostDescription}`}</p>
                        <input placeholder="add a comment" />
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

export default connect(mapStateToProps, {fetchComments} )(PostPage);

// export default PostPage

// fetchComments