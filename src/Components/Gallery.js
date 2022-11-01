 import star from "../images/Star 1.png";


export default function Gallery (props) {
    return (
        <section>
            <div className="card">
                <div className="box-flex box-flex-top-right">                    
                    <img className="box-img"  alt="swimer" src={props.coverImg}/>
                    <h5 className="box-caption">{props.location}</h5>
                </div>
                <div className="cardDescription">
                    <p><img className="card--star" alt="starr" src={star} /><span className="gray"> {props.rating} ({props.reviewCount}) • USA</span></p>
                    <p>{props.title}</p>
                    <p><span>From ${props.price}</span> / person</p>
                </div>   
            </div>
        </section>
        
    )
}
