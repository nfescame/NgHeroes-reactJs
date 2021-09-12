import React from "react";

import "../style.css";

import NavBar from "./NavBar";
import Header from "./Header";

function Home() {
  return (
    <div className='bg-home'>
      <NavBar />
      <Header />
    </div>
  );
}

export default Home;
