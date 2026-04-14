import '../App.css'

function LandingPage() {
    return (
        <>
            <div className='main'>
                <div className='TextContainer'>
                    <p className='Text'>Block Intel v1.0 </p>
                </div>
                <div className='LargeText'>
                    <p>Transforming raw data <br /> into market alpha</p>
                    <div className="SubText">
                        <p>Real-time intelligence through semantic discovery. </p>
                    </div>
                </div>
                <div className='JoinCommunityContainer'>
                    <div className="subContainer">
                        <input type="text" name="text" id="UserInput" placeholder='Enter your email' />
                        <button>Subscribe to Newletter</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;