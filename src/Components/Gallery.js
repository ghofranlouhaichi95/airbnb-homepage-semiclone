 import star from "../images/Star 1.png";


export default function Gallery (props) {
    let badgeText /* Initially badgeText is undefined  */
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section>
            <div className="card">
                <div className="box-flex box-flex-top-right">                    
                    <img className="box-img"  alt="swimer" src={props.coverImg}/>
                    {/* {props.openSpots === 0 && <h5 className="box-caption">SOLD OUT</h5>} */}
                    {badgeText && <h5 className="box-caption">{badgeText}</h5>} {/* if badgeText exist display the value other display none */}
                </div>
                <div className="cardDescription">
                    <p><img className="card--star" alt="starr" src={star} /><span className="gray"> {props.stats.rating} ({props.stats.reviewCount}) • {props.location}</span></p>
                    <p>{props.title}</p>
                    <p><span>From ${props.price}</span> / person</p>
                </div>   
            </div>
        </section>
        
    )
}
