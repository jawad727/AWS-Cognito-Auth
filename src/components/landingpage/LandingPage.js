import React, {Component} from 'react';
import './landing.css';
import img from "./pictures/landing-image2.png"
import img2 from "./pictures/landing-image.png"
import img3 from "./pictures/wayve.png"

class LandingPage extends Component {

  
    render() {
        
        return (
            <div data-test="headerComponent" className="landingContainer">
                <div className="topDiv">
                  <p data-test="landingSlogan" className="LandingTitle" >Your personal news feed delivered</p>
                  <p data-test="landingSlogan" className="LandingSlogan" > Read your favorite articles. </p>
                  <p data-test="landingSlogan" className="LandingSlogan" > Connect with friends. </p>
                </div>

                <div className="ScreenSizerTop">
                  <img className="firstHalfImage" src={img}/>
                </div>
                  <button onClick={() => this.props.history.push(`/signup`)} className="firstHalfButton" > Sign Up </button>
                
                <img className="wayve" src={img3} />
             
              <div className="secondHalfDiv" >
                  <div className="SecondHalfInnerContainer">
                    <img className="secondHalfImage" src={img2}/>
                    <div className="secondHalfContent">
                      <p className="secondHalfTitle"> Your New Social News Hub </p>
                      <p className="secondHalfParagraph"> ArticleHub puts the news in your hands. 
                      Browse your favorite articles across politics, sports, tech, art, and more! </p>
                      <p className="secondHalfParagraph"> Connect with other users to see articles they're
                      posting and exchange ideas in comments </p>
                      <p className="secondHalfParagraph"> Curate your news feed. Tired of old articles? Delete
                      them from your profile to make room for new and exciting reads!</p>
                      
                      <button onClick={() => this.props.history.push("/home")} > Browse All Articles </button>
                    </div>
                  </div>
              </div>

              <div className="LandingFooter" >
                <p>Copyright 2019 ArticleHub, Inc.</p>
              </div>

            </div>
          )
    }
  }
   

    
export default LandingPage
  