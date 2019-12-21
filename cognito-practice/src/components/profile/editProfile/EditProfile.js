import React, {Component} from 'react'
import "./editProfile.css"
import {connect} from "react-redux"


class EditProfile extends Component {
      state = {
         
      }



    

    render() {

        // console.log(this.props.content)
        // console.log(this.props.allPostsByUser)

        return (
          <div className="EditHeaderModuleContainer">
          <div className="EditHeaderModule" />
      </div>
        );
    }
}

const mapStateToProps = state => ({

    
  })


export default connect(mapStateToProps, null)(EditProfile);