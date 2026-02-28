import './style.css'
import FeatureBox from "./FeatureBox";

function SecondContent() {
    return (
        <>
            <div>
                <div className="TopText">
                    <h1>Features</h1>
                    <p>we offer a wide range of features</p>
                </div>
                <div className="features-grid">
                    <FeatureBox />
                </div>
            </div>
        </>
    )
}

export default SecondContent;