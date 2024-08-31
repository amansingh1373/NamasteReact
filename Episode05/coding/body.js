import ResCard from "./res-card";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const SearchInput = ({searchValue,onChangeHandler}) => {
    return ( 
        <div className="search-input-container">
            <input type="text" value={searchValue} onChange={(e) => {onChangeHandler(e)}}/>
            <button>search</button>
        </div>
    );
}

const Body = () => {
    const API_URI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const [initialData, setInitialData] = useState([]);
    const [resData, setResData] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    onClickHandler = () => {
        const resDataTemp = resData.filter((res) => {
            return res.info.avgRating >= 4;
        });
        setResData(resDataTemp);
    }
    const searchFilterHandler = (e) => {
        const resDataTemp = initialData.filter((res) => {
            return res.info.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setSearchValue(e.target.value);
        setResData(resDataTemp);
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(API_URI);
            const jsonData = await data.json();
            // console.log(jsonData);
            const resDetail = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setInitialData(resDetail);
            setResData(resDetail);
        };
        fetchData();
    },[]);

    return ( 
        <div>
            <div className="filter-res-container">
                <div className="width-provider-searchInput">
                    <SearchInput searchValue={searchValue} onChangeHandler={searchFilterHandler} />
                </div>
                <button className="filter-res-button" onClick={onClickHandler}>Top Rated Restraunt</button>    
            </div>
            {
                resData.length > 0 
                ?<div className="res-container">
                    {resData.map((restrauntDetails) => {
                        console.log(restrauntDetails);
                        return (
                            <ResCard key={restrauntDetails.info.id} resDetail={restrauntDetails} />
                        )
                    })}
                </div>      
                :<Shimmer />
            }
        </div>
     );
}
 
export default Body;