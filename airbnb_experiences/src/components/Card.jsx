import starLogo from '../assets/star_icon.png'
import cardImage from '../assets/card_image.png'
export default function Card() {
    return (
        <div className='card'>
            <img src={cardImage} className="card--image"/>
            <div className='card--footer'>
                <img src={starLogo} className="card--star"/>
                <span className='card--rating'>5.0</span>
                <span className='grey'>(6) &bull; </span>
                <span className='grey'>USA</span>
            </div>
            <p className='card--title'>Life lessons with Katie Zaferest</p>
            <p><span className='bold'>From $136 </span>/ person</p>
        </div>
    )
}