import "./mottoStyles.css";
import checkSkin from "./skinChecker.png";
import Typewriter from "../../components/Typewriter/Typewriter";

function motto(){
    return(
        <div className="div-motto">
            <section className="motto">
                <div className="typewriter-wrapper">
                    <Typewriter
                        text="Stay vigilant and protect your skin."
                        speed={70}
                        pauseTime={4000}
                        deleteSpeed={50}
                    />
                </div>
                <div className="image-container">
                    <img src={checkSkin} alt="Skin Check" className="skin-img" />
                </div>
            </section>
        </div>
    );
}
export default motto;