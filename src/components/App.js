import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import ListHeroes from "./ListHeroes";
import Details from "./Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Switch>
          <Route path='/listheroes' component={ListHeroes} />
          <Route path='/details/:HeroId' component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
