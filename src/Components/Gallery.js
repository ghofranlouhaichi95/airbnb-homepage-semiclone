 import star from "../images/Star 1.png";
 import swimer from "../images/image12.png";

export default function Gallery (props) {
    return (
        <section>
            <div className="card">
                <div className="box-flex box-flex-top-right">                    
                    <img className="box-img"  alt="swimer" src={swimer} />
                    <h5 className="box-caption">SOLD OUT</h5>
                </div>
                <div className="cardDescription">
                    <p><img className="card--star" alt="starr" src={star} /><span className="gray">{props.reviews} ({props.views}) • USA</span></p>
                    <p>{props.p1}</p>
                    <p><span>From ${props.price}</span> / person</p>
                </div>   
            </div>

            {/* <div className="card">
                <div className="box-flex box-flex-top-right">                    
                    <img className="box-img"  alt="swimer" src={swimer} />
                    <h5 className="box-caption">ONLINE</h5>
                </div>
                <div className="cardDescription">
                    <p><img className="card--star" alt="starr" src={star} />5.0 <span className="gray">(6) • USA</span></p>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span>From $136</span> / person</p>
                </div>
            </div> */}
            {/* <div className="card">
                <div className="box-flex box-flex-top-right">                    
                    <img className="box-img"  alt="swimer" src={swimer} />
                    <h5 className="box-caption">SOLD OUT</h5>
                </div>
                <div className="cardDescription">
                    <p><img className="card--star" alt="starr" src={star} /><span className="gray">(6) • USA</span></p>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span>From $136</span> / person</p>
                </div>             
            </div> */}
        </section>
        
    )
}