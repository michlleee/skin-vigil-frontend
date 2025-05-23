import "./howToStyles.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import FadeIn from "../../components/FadeInScrollEffect/FadeInScroll.jsx";

function howTo(){
    return(
        <div className="main-container">
            <FadeIn>
                <p className="how-to-txt">How To Use</p>
                <div className="main-content-container">
                    <div className="step">
                        <h3 className="step-txt">STEP 1</h3>
                        <p className="step-desc">Take a clear photo of<br></br> your skin</p>
                        <IoCameraOutline className="icon" />
                    </div>
                    <div className="divider"></div>
                    <div className="step">
                        <h3 className="step-txt">STEP 2</h3>
                        <p className="step-desc">Upload your image file</p>
                        <FiUpload className="icon" />
                    </div>
                    <div className="divider"></div>
                    <div className="step">
                        <h3 className="step-txt">STEP 3</h3>
                        <p className="step-desc">Obtain the result</p>
                        <IoMdCheckmarkCircleOutline className="icon" />
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
export default howTo;