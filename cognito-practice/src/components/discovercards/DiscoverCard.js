import React, {Component} from 'react';
import {connect} from "react-redux"
import {fetchPosts} from "../../store/actions/index"
import "./discovercard.css"


class DiscoverCard extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }

  componentDidMount() {
    
  }

  accessTokenObj = localStorage.getItem("jwt")


  render() {

    console.log(this.props.usersArray)

      return (
        <div className="DiscoverCard">
           <div className="DiscoverCardImage" style={{ backgroundImage: `url(${this.props.content.Profpic})` }} />
           <div className="DiscoverCardContent" >
            <p>{this.props.content.Username}</p>
           </div>
        </div>
        )
  }
}
 
const mapStateToProps = state => ({
  

})

export default connect(mapStateToProps, {fetchPosts} )(DiscoverCard);
