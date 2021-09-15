import logo from "../assents/img/logo1.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className='navbar bg-dark'>
        <div className='container-fluid justify-content-btween'>
          <div className='navbar-brand' to='/listheroes'>
            <img
              src={logo}
              alt=''
              width='80'
              height='80'
              className='d-inline-block align-text-top mx-3'
            />
          </div>
          <div className='mx-3'>
            <Link to='/'>
              <p>Home</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
