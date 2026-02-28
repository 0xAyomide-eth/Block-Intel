import './style.css'

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
                    <p>Lorem ipsum, sequi adipisci eum architecto cupiditate quidem libero molestias consequuntur,<br /> dignissimos inventore. Vel ipsa alias itaque dignissimos animi.</p>
                </div>
            </div>
            <div className='JoinCommunityContainer'>
                <div className="subContainer">
                    <input type="text" name="text" id="UserInput" placeholder='Enter your email' />
                    <button>Join the Community </button>
                </div>
            </div>
            </div>
        </>
    )
}

export default FirstContent;