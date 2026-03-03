import arrowIcon from '../assets/icons/whiteicons/icons8-arrow-50.png'
import './style.css'

export default function Card(props) {
return(
        <div className="box">
        <img src={props.img} alt="averagePrice-icon" className='box-pic' />
        <p className='box-title'>{props.text}</p>
        <p>{props.content}</p>
        <button>Check Out <img src={arrowIcon} alt="" className='arrow' /></button>
    </div>
)
}