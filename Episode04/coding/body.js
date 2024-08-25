import ResCard from "./res-card";
import {resData} from './res-data';

const SearchInput = () => {
    return ( 
        <h1>This is Search component</h1>
     );
}

const Body = () => {
    return ( 
        <div>
            <SearchInput />
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