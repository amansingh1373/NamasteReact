import ResCard from "./res-card";
import { useState } from "react";
import {resData as importedResData} from './res-data';

const SearchInput = () => {
    return ( 
        <div>This is search component</div>
    );
}

const Body = () => {
    const [resData, setResData] = useState(importedResData);
    onClickHandler = () => {
        const resDataTemp = resData.filter((res) => {
            return res.info.avgRating >= 4;
        });
        setResData(resDataTemp);
    }
    return ( 
        <div>
            <SearchInput />

            <button onClick={onClickHandler}>4+ rating</button>    
            <div className="res-container">
                {resData.map((restrauntDetails) => {
                    console.log(restrauntDetails);
                    return (
                        <ResCard key={restrauntDetails.info.id} resDetail={restrauntDetails} />
                    )
                })}
            </div>
        </div>
     );
}
 
export default Body;