import { Link } from "react-router-dom";
import Img1 from "../assets/img/home7.jpg";
import Img3 from "../assets/img/heroes.jpg";

function Header() {
  return (
    <div className=' my-5 bg'>
      <div className='float-md-start event eventHeader'>
        <img
          src={Img1}
          alt='description'
          style={{ width: "72%", borderRadius: "3%" }}
        />

        <div className='content'>
          <h3>All Heroes</h3>

          <div className='rollover '>
            <Link to='/listheroes'>
              Here you can find your favorite characters.
            </Link>
          </div>
        </div>
      </div>

      <div className='float-md-start event eventHeader'>
        <img
          src={Img3}
          alt='description'
          style={{ width: "100%", borderRadius: "3%" }}
        />

        <div className='content'>
          <h3>My Squad</h3>

          <div className='rollover'>
            <Link to='/mysquad'>See your Squad here!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
