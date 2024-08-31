const Shimmer = () => {
    const shimmerResCard = {
        "height": "250px",
        "backgroundColor": "#f0f0f0",
        "border": "none",
    }
    const shimmerContainer = {
        "flex": "1",
    }
    return ( 
        <div className="res-container" style={shimmerContainer}>
            <div className="res-card" style={shimmerResCard}></div>
            <div className="res-card" style={shimmerResCard}></div>
            <div className="res-card" style={shimmerResCard}></div>
            <div className="res-card" style={shimmerResCard}></div>
            <div className="res-card" style={shimmerResCard}></div>
            <div className="res-card" style={shimmerResCard}></div>
            <div className="res-card" style={shimmerResCard}></div>
            <div className="res-card" style={shimmerResCard}></div>
            <div className="res-card" style={shimmerResCard}></div>
            <div className="res-card" style={shimmerResCard}></div>
        </div>
    );
}
 
export default Shimmer;