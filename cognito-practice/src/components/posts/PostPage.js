import React, {Component} from 'react';



class PostPage extends Component {
  state = {

  }

  render() {


    console.log(this.props.content)

      return (
        <div className="backgroundPostContainer">
           <div className="singlePostContainer" >
                <div className="singlePostImage" />

                <div className="singlePostContent">
                    <h3>{this.props.content.Username}</h3>
                    <div>
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
 
// const mapStateToProps = state => ({

//   allPostsArray: state.allPostsArray

// })

// export default connect(mapStateToProps, null )(PostPage);

export default PostPage