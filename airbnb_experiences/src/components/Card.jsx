import starLogo from '../assets/star_icon.png'
export default function Card(props) {
    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === 'Online') {
        badgeText = "ONLINE"

    }
    console.log(badgeText)
    return (
        <div className='card'>
            {badgeText &&<div className='card--badge'>{badgeText}</div>}
            <img src={`src/assets/${props.item.coverImg}`} className="card--image"/>
            <div className='card--footer'>
                <img src={starLogo} className="card--star"/>
                <span className='card--rating'>{props.item.stats.rating}</span>
                <span className='grey'>({props.item.stats.reviewCount})  • </span>
                <span className='grey'>{props.item.location}</span>
            </div>
            <p className='card--title'>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price} </span>/ person</p>
        </div>
    )
}