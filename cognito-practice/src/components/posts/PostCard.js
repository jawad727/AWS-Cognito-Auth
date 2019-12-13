import React, {Component} from 'react'
import "./postCard.css"

class PostCard extends Component {
      state = {
         
      }
      

    

    render() {
    
        return (
            <div className="CardContainer">
               <div className="CardIMG" />
               <div className="CardContent" >
                    <p>{this.props.content.PostName}</p>
                    <p>{`${this.props.content.Username + ":"} ${this.props.content.PostDescription.length > 70 ? this.props.content.PostDescription.slice(0, 75) + "..." : this.props.content.PostDescription}`}</p>
                    <p> {`${this.props.content.Comments.length} comments`} </p>
                    {/* <p>{this.props.content.createdAt - new Date()}</p> */}
                </div>
            </div>
        );
    }
}

export default PostCard