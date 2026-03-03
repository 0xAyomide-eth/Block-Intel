import './style.css'
import Aiagent from '../assets/icons/greenishicons/icons8-ai-90.png'
import averagePrice from '../assets/icons/greenishicons/icons8-average-price-50.png'
import alerts from '../assets/icons/greenishicons/icons8-google-alerts-50.png'
import news from '../assets/icons/greenishicons/icons8-news-50.png'
import rating from '../assets/icons/greenishicons/icons8-rating-64.png'
import trading from '../assets/icons/greenishicons/icons8-trading-50.png'


import Card from './card';

function SecondContent() {
    return (
        <>
            <div>
                <div className="TopText">
                    <h1>Features</h1>
                    <p>we offer a wide range of features</p>
                </div>
                <div className="features-grid">

                    <Card 
                    img ={Aiagent}
                    text="AI chat mode"
                    content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint, ad odio est perferendis provident nemo dolor et cumque quidem."                              
                    />

                    <Card 
                    img ={trading}
                    text="Basic Trade Idea"
                    content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint, ad odio est perferendis provident nemo dolor et cumque quidem."                              
                    />

                    <Card 
                    img ={news}
                    text="News Summary"
                    content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint, ad odio est perferendis provident nemo dolor et cumque quidem."                              
                    />

                    <Card 
                    img ={rating}
                    text="Price sentiment score"
                    content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint, ad odio est perferendis provident nemo dolor et cumque quidem."                              
                    />

                    <Card 
                    img ={alerts}
                    text="Alerts"
                    content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint, ad odio est perferendis provident nemo dolor et cumque quidem."                              
                    />

                    <Card 
                    img ={averagePrice}
                    text="Price Tracking"
                    content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint, ad odio est perferendis provident nemo dolor et cumque quidem."                              
                    />                                                                                                    

                </div>
            </div>
        </>
    )
}

export default SecondContent;