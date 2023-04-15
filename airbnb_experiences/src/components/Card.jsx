import starLogo from '../assets/star_icon.png'
export default function Card(props) {
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.country === 'Online') {
        badgeText = "ONLINE"

    }
    console.log(badgeText)
    return (
        <div className='card'>
            {badgeText &&<div className='card--badge'>{badgeText}</div>}
            <img src={`src/assets/${props.image_name}`} className="card--image"/>
            <div className='card--footer'>
                <img src={starLogo} className="card--star"/>
                <span className='card--rating'>{props.rating}</span>
                <span className='grey'>({props.reviewCount})  • </span>
                <span className='grey'>{props.country}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p><span className='bold'>From ${props.price} </span>/ person</p>
        </div>
    )
}