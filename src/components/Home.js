import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav class='navbar navbar-light bg-info'>
        <div class='container-fluid justify-content-center'>
          <Link class='navbar-brand' to='/listheroes'>
            <img
              src='/docs/5.1/assets/brand/bootstrap-logo.svg'
              alt=''
              width='30'
              height='24'
              class='d-inline-block align-text-top'
            />
            Heroes
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Home;
