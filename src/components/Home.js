import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div className='bg-home'>
      <NavBar />
      <div className='row mx-0'>
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
