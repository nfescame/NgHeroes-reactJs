import logo from "../assents/img/logo1.png";

function NavBar() {
  return (
    <div>
      <nav className='navbar bg-dark'>
        <div className='container-fluid justify-content-center'>
          <div className='navbar-brand' to='/listheroes'>
            <img
              src={logo}
              alt=''
              width='120'
              height='120'
              className='d-inline-block align-text-top'
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
