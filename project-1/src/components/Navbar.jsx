import reactLogo from '../assets/reactjs-icon.svg'

function Navbar() {
    return (
        <nav className="navbar">
            <img src={reactLogo} className="nav--icon"/>
            <h1 className='nav--logo_text'>ReactFacts</h1>
            <h2 className='nav--title'>React Course - Project 1</h2>
        </nav>
    )
}
export default Navbar;