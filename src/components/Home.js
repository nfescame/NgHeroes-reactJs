import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <Navbar />
      {/* <Link to='/listheroes'>list</Link> */}
    </div>
  );
}

export default Home;
