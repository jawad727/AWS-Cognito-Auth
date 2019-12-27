import React, {Component} from "react";
import {Auth} from "aws-amplify";

export default function(ComposedComponent) {
    class Authenticate extends Component {
        state = {
            loading: true
        }

        componentWillMount() {
            Auth.currentSession()
            .then((user) => this.setState({loading: false}) )
            .catch((err) => this.props.history.push("/home") )
        }

        componentDidMount() {
            if (this.state.loggedin == false) {
                
            }
        }

        render() {

            return (
                <>
                {   this.state.loading ? 
        
                    <div className="spinnerContainer"> 
                    <i class="fas fa-spinner fa-3x"></i> 
                    </div> :

                <ComposedComponent {...this.props} />   }
                </>
            );
        }
    }

    return Authenticate
}