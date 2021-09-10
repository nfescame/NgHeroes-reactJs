import React from "react";
import Home from "./Home";
import ListHeroes from "./ListHeroes";
// import About from "./About";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul classNameName='nav container'>
        <li className='nav-item'>
          <Link className='nav-link active' to={Home}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to={ListHeroes}>
            Heroes
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
