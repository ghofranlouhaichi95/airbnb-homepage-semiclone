import logoAirbnb from "../images/airbnb 1.png"

function Navbar() {
    return (
    <nav className="navbarSect">
        <div className="navbarLogo">
            <img alt="logoAirbnb" src={logoAirbnb} />
        </div>
    </nav>
    );
  }
  
  export default Navbar;