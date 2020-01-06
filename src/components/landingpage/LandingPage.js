import React, {Component} from 'react';
import './landing.css';
import img from "./pictures/landing-image2.png"
import img2 from "./pictures/landing-image.png"

class LandingPage extends Component {

  
    render() {
        
        return (
            <div className="landingContainer">
                <div>
                  <p className="LandingTitle" >Your personal news feed delivered</p>
                  <p className="LandingSlogan" > Read your favorite articles. </p>
                  <p className="LandingSlogan" > Connect with friends. </p>
                </div>
                <img className="firstHalfImage" src={img}/>
                <button className="firstHalfButton" > Sign Up </button>
             
              <div className="secondHalfDiv" >
                <img className="secondHalfImage" src={img2}/>
                <div className="secondHalfContent">
                  <p className="secondHalfTitle"> Your New Social News Hub </p>
                  <p className="secondHalfParagraph"> ArticleHub puts the news in your hands. 
                  Browse your favorite articles across politics, sports, tech, art, and more! </p>
                  <p className="secondHalfParagraph"> Connect with other users to see articles they're
                   posting and exchange ideas in comments </p>
                  <p className="secondHalfParagraph"> Curate your news feed. Tired of old articles? Delete
                   them from your profile to make room for new and exciting reads!</p>
                   <button> Sign Up </button>
                </div>
              </div>

            </div>
          )
    }
  }
   

    
export default LandingPage
  