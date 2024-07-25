import logo from './assets/icon.png';
const Header = () => {
    return ( 
        <div className="header">
            <img className='nav-logo' src={logo} />
            <div class="nav-search-bar">
                <input className='nav-search-input' type="text"/>
                <button className="nav-search-button">
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </button>
            </div>
            <button className="nav-user">
                <span class="material-symbols-outlined">
                    person
                </span>
            </button>
        </div>
     );
}
 
export default Header;