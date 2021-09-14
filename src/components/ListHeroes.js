import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import NewPlayer from "./NewPlayer";

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
      this.setState({ allHeroes: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };
  filterHeroesName = async (text) => {
    let newArr = [];
    try {
      const response = await axios.get(
        `https://akabab.github.io/superhero-api/api/all.json`
      );

      newArr = [...response.data];
      newArr.map((hero) => {
        if (hero.name.toLowerCase().includes(text)) {
          newArr = hero;
        }
      });
      console.log(newArr);
      this.setState({ allHeroes: [newArr] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
    <div>

      <div>
        <NewPlayer />
      </div>

      <div className='row mx-2'>
        <SearchBar filterHeroesName={this.filterHeroesName} />
        {this.state.allHeroes.map((hero) => {
          return (
            <Link className='event' to={`/details/${hero.id}`} key={hero.id}>
              <img
                src={hero.images.md}
                alt='description'
                style={{ width: "100%" }}
              />

              <div className='content'>
                <h3>{hero.name}</h3>

                <div className='rollover'>
                  <p>Full Name: {hero.biography.fullName}</p>
                  <p>First Appearance: {hero.biography.firstAppearance}</p>
                  <p>Publisher: {hero.biography.publisher}</p>
                  <p>Place Of Birth: {hero.biography.placeOfBirth}</p>
                  <p>Group Affiliation: {hero.connections.groupAffiliation}</p>
                  <h3>Click for more details.</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
    );
  }
}

export default ListHeroes;
