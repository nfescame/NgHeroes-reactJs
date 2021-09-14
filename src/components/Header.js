import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css"
import Img1 from "../assents/img/home7.jpg";
import Img3 from "../assents/img/home2.jpg";

function Header() {
  return (
    <div className='container my-4 d-flex'>
      <Link className='float-md-start' to='/listheroes'>
        <img src={Img1} alt='description' style={{ width: "100%" }} />

        <div className='content'>
          <h3>All Heroes</h3>

          <div className='rollover'>
            <p>Here you can find your favorite characters.</p>
          </div>
        </div>
      </Link>

      <Link className='float-md-start' to='/mysquad'>
        <img src={Img3} alt='description' style={{ width: "100%" }} />

        <div className='content'>
          <h3>My Squad</h3>

          <div className='rollover'>
            <p>See your Squad here!</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
