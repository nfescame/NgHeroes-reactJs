import Home from "./Home";
import ListHeroes from "./ListHeroes";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/listheroes' component={ListHeroes} />
      </BrowserRouter>
    </div>
  );
}
export default App;
