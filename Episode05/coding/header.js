import Logo from './assets/logo.png';

const Header = () => {
    return ( 
        <div className="nav-bar">
            <img src={Logo} />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
     );
};
 
export default Header;