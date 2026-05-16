import '../App.css'
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <>
            <div className='main'>
                <div className='TextContainer'>
                    <p className='Text'>Block Intel v1.0</p>
                </div>
                <div className='LargeText'>
                    <p>Transforming raw data <br /> into market alpha</p>
                    <div className="SubText">
                        <p>Real-time intelligence through semantic discovery.</p>
                    </div>
                </div>
                <div className='JoinCommunityContainer'>
                    <div className="subContainer">
                        <Link to="/signup">
                            <button>Get started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;