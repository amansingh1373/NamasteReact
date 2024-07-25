// import Header from "./Header";
import React from 'react';

// const h1 = React.createElement('h1',{},'This is App component');
// const header = React.createElement('div',{class: "title"}, [h1, h1, h1]);

const Header = () => {
    return (
        <div className="title">
            <h1>This is appp component</h1>
            <h1>This is appp component</h1>
            <h1>This is appp component</h1>
        </div>
    );
}

const App = () => {
    return ( 
        <>
            <h1>This is App component</h1>
        </>
     );
}
 
export default App;