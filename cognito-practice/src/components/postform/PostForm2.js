import React, {Component} from 'react'
import {connect} from "react-redux"
import "./postform.css"
import {Storage} from "aws-amplify"


class PostForm2 extends Component {
      state = {
         fileUrl: "",
         
      }

        componentDidMount() {
            Storage.get("jawad/griipelogo2.png").then(data => {
                this.setState({
                    fileUrl: data
                })
            })
            .catch(err => {
                console.log("There was an error")
            })
        }

    render() {

            console.log(this.state.state)

        return (
            <div  >
                
                   
                    <img src={this.state.fileUrl} />
                    
            
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    
    
  })


export default connect(mapStateToProps, null)(PostForm2);