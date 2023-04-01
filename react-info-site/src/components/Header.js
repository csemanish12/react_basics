import logo from '../logo.svg';
function Header() {
    return (
      <header>
        <nav className='nav'>
          <img className='logo-img' src={logo} />
          <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }
  export default Header;