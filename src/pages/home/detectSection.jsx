import "./detectSectionStyles.css";
import micro from "./micro.png"
import FadeIn from "../../components/FadeInScrollEffect/FadeInScroll.jsx";
import ShinyButton from "../../components/ShinyButtonEffect/ShinyButton.jsx";

function detectSection() {
  return (
    <div className="detect-container">
      <FadeIn>
        <div className="detect-content">
          <div className="detect-text">
            <h2>Detect Skin Cancer</h2>
            <p>
              Early detection saves lives. Upload an image of your skin concern, 
              and our AI-powered analysis will assess potential risks in seconds. 
              Stay informed, stay protected, and take control of your skin health today.
            </p>
            <a href="/upload">
              <ShinyButton speed={5}>
                <button className="upload-btn">UPLOAD IMAGE</button>
              </ShinyButton>
            </a>
            
          </div>

          <div className="detect-image">
            <img src={micro} alt="Skin Check"></img>
          </div>
        </div>
      </FadeIn>
      
    </div>
  );
}

export default detectSection;