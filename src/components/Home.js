import React from "react";
import "../style.css";
import logo from "../assents/img/logo1.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='bg-home'>
      <nav className='navbar'>
        <div className='container-fluid justify-content-center'>
          <Link className='navbar-brand' to='/listheroes'>
            <img
              src={logo}
              alt=''
              width='100'
              height='100'
              className='d-inline-block align-text-top'
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Home;
