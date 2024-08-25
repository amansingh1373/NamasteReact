const ResCard = (props) => {
    const resDetail = props.resDetail.info;
    const {name, cloudinaryImageId, avgRating, locality, areaName} = resDetail;
    return ( 
        <div className="res-card">
            <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <div className="res-info">
                <h2>{name}</h2>
                <div className="res-rating">
                    <span>{avgRating}</span>
                </div>
                <div className="res-location">
                    <span>{locality}, {areaName}</span>
                </div>
            </div>
        </div>
     );
}
 
export default ResCard;
