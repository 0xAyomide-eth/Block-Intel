import '../App.css'

function FirstContent() {
    return (
        <>
            <div className='main'>
                <div className='TextContainer'>
                    <p className='Text'>software enginnering project</p>
                </div>
                <div className='LargeText'>
                    <p>Empowering crypto search with <br /> AI Innovation</p>
                    <div className="SubText">
                        <p>    Transforming fragmented blockchain data into instant, actionable intelligence <br /> through semantic discovery and real-time risk assessment. </p>
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

export default FirstContent;