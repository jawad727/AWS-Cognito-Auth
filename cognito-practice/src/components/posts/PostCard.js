import React, {Component} from 'react'
import "./postCard.css"

class PostCard extends Component {
      state = {
         
      }
      

    

    render() {

        
    
        return (
            <div className="CardContainer">
               <div className="CardIMG" onClick={() => this.props.history.push(`/${this.props.content.uid}`)} style={{ backgroundImage: `url(${this.props.content.PostImage})`}} />
               <div className="CardContent" >
                    <p className="CardLikesNumber" > {`Read ${this.props.content.PostLikes} times`} </p>
                    <p className="CardTitle" >{this.props.content.PostName.length > 38 ? this.props.content.PostName.slice(0, 38) + "..." : this.props.content.PostName}</p>
                    <p className="CardDescription" onClick={() => this.props.history.push(`/${this.props.content.Username}`)}>{`${this.props.content.Username + ":"} ${this.props.content.PostDescription.length > 75 ? this.props.content.PostDescription.slice(0, 75) + "..." : this.props.content.PostDescription}`}</p>
                    <p>{this.props.content.date.slice(0, 17)}</p>
                    {/* <p>{this.props.content.createdAt - new Date()}</p> */}
                </div>
                
            </div>
        );
    }
}

export default PostCard