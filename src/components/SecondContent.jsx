import '../App.css'
import SiteData from '../SiteData/data.js'
import Card from './card';

function SecondContent() {
    const Data = SiteData.map((SD)=>{
        return (
            <Card 
            image={SD.image}
            title={SD.title}
            content={SD.content}
            />
        )
    })
    return (
        <>
            <div>
                <div className="TopText">
                    <h1>Features</h1>
                    <p>we offer a wide range of features</p>
                </div>
                <div className="features-grid">
               {Data}
                </div>
            </div>
        </>
    )
}

export default SecondContent;