import airbnbLogo from  '../assets/airbnb_logo.svg';

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={airbnbLogo} className="nav--logo"/>
        </nav>
    )
}