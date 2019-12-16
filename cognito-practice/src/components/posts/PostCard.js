import React, {Component} from 'react'
import "./postCard.css"

class PostCard extends Component {
      state = {
         
      }
      

    

    render() {

        
    
        return (
            <div className="CardContainer">
               <div className="CardIMG" onClick={() => this.props.history.push(`/${this.props.content.uid}`)} />
               <div className="CardContent" >
                    <p className="CardTitle" >{this.props.content.PostName}</p>
                    <p className="CardDescription" onClick={() => this.props.history.push(`/${this.props.content.Username}`)}>{`${this.props.content.Username + ":"} ${this.props.content.PostDescription.length > 70 ? this.props.content.PostDescription.slice(0, 80) + "..." : this.props.content.PostDescription}`}</p>
                    <p className="CardCommentNumber" > {`${this.props.content.Comments.length} comments`} </p>
                    {/* <p>{this.props.content.createdAt - new Date()}</p> */}
                </div>
                
            </div>
        );
    }
}

export default PostCard