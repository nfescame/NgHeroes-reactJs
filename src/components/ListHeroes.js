import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

// https://akabab.github.io/superhero-api/api/all.json
class ListHeroes extends React.Component {
  state = {
    allHeroes: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      this.setState({ allHeroes: response.data });
    } catch (err) {
      console.error(err);
    }
  };
  filterHeroesName = async (text) => {
    try {
      const response = await axios.get(
        `https://akabab.github.io/superhero-api/api/id/${text}.json`
      );
      this.setState({ allHeroes: [response.data] });
    } catch (err) {
      console.error(err);
    }
    console.log(this.state.allHeroes);
  };

  render() {
    return (
      <div>
        <SearchBar filterHeroesName={this.filterHeroesName} />
        <div className='w-75'>
          <div className='row row-cols-2 row-cols-lg-5 g-5 g-lg-2'>
            {this.state.allHeroes.map((hero) => {
              return (
                <Link to={`/details/${hero.id}`} className='' key={hero.id}>
                  <div className='card col' style={{ width: "10rem" }}>
                    <img
                      src={hero.images.md}
                      className='card-img-top'
                      alt={hero.name}
                    />
                    <div className='card-body'>
                      <h6 className='card-title'>{hero.name}</h6>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListHeroes;
