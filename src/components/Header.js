import { Link } from "react-router-dom";

import Img1 from "../assents/img/home7.jpg";
import Img2 from "../assents/img/home1.jpg";
import Img3 from "../assents/img/home6.jpg";

function Header() {
  return (
    <div className='container my-4 d-flex'>
      <Link className='event' to='/listheroes'>
        <img src={Img1} alt='description' style={{ width: "100%" }} />

        <div className='content'>
          <h3>List Heroes</h3>

          <div className='rollover'>
            <p>Here you can find your favorite characters.</p>
          </div>
        </div>
      </Link>
      <Link className='event' to='/listheroes'>
        <img src={Img2} alt='description' style={{ width: "100%" }} />

        <div className='content'>
          <h3>Create top five heroes</h3>

          <div className='rollover'>
            <p>create your custom list with god favorite heroes</p>
          </div>
        </div>
      </Link>

      <Link className='event' to='/listheroes'>
        <img src={Img3} alt='description' style={{ width: "100%" }} />

        <div className='content'>
          <h3>List Heroes</h3>

          <div className='rollover'>
            <p>Here you can find your favorite characters.</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
