import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import SearchBar from "./SearchBar";
import NewPlayer from "./NewPlayer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

// https://akabab.github.io/superhero-api/api/all.json
class ListHeroes extends React.Component {
  state = {
    allHeroes: [],
    playerName: "",
    squadName: "",
    allFavFive: [],
    allFavImg: [],
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

      newArr = [];
      response.data.map((hero) => {
        if (hero.name.toLowerCase().includes(text.toLowerCase())) {
          newArr.push(hero);
        }
      });
      console.log(newArr);
      this.setState({ allHeroes: [...newArr] });
    } catch (err) {
      console.error(err);
    }
  };

  handleChangeName = (event) => {
    this.setState({ playerName: event.target.value });
  };

  handleChangeSquad = (event) => {
    this.setState({ squadName: event.target.value });
  };

  handleSubmitAll = (event) => {
    event.preventDefault();
    if (this.state.allFavFive.length === 5) {
      const stateClone = { ...this.state };
      delete stateClone.allHeroes;
      axios
        .post("https://ironrest.herokuapp.com/NGHeroes", stateClone)
        .then((response) => {
          console.log(response);
          this.props.history.push("/");
        })

        .catch((err) => console.error(err));
    }
  };

  handleChangeHero = (event, index) => {
    if (
      this.state.allFavFive.length < 5 &&
      !this.state.allFavFive.includes(event.target.name)
    ) {
      let allFavFiveClone = [...this.state.allFavFive];
      allFavFiveClone.push(event.target.name);
      this.setState({ allFavFive: [...allFavFiveClone] });

      const img = this.state.allHeroes[index].images.md;
      let cloneImg = [...this.state.allFavImg];
      cloneImg.push({ img });
      this.setState({ allFavImg: [...cloneImg] });
    } else {
      alert("Character be select");
    }
  };

  render() {
    console.log(this.state.allFavImg);
    return (
      <div>
        <NavBar />
        <div className='d-flex'>
          <div>
            <NewPlayer
              handleChangeName={this.handleChangeName}
              state={this.state}
              handleChangeSquad={this.handleChangeSquad}
              handleSubmitAll={this.handleSubmitAll}
            />
          </div>
          <div>
            {this.state.allFavImg.map((img) => {
              return <img src={img.img} alt='img' className='w-25' />;
            })}
          </div>
        </div>

        <div className='row mx-2'>
          <SearchBar filterHeroesName={this.filterHeroesName} />
          {this.state.allHeroes.map((hero, index) => {
            return (
              <div className='event'>
                <img
                  src={hero.images.md}
                  alt='description'
                  style={{ width: "100%" }}
                />

                <div className='content'>
                  <h3>{hero.name}</h3>
                  <div
                    className='btn-group'
                    role='group'
                    aria-label='Basic checkbox toggle button group'
                  >
                    <button
                      name={hero.id}
                      onClick={(event) => this.handleChangeHero(event, index)}
                      type='button'
                      class='btn btn-primary'
                    >
                      Add
                    </button>
                  </div>

                  <div className='rollover'>
                    <p>Full Name: {hero.biography.fullName}</p>
                    <p>First Appearance: {hero.biography.firstAppearance}</p>
                    <p>Publisher: {hero.biography.publisher}</p>
                    <p>Place Of Birth: {hero.biography.placeOfBirth}</p>
                    <p>
                      Group Affiliation: {hero.connections.groupAffiliation}
                    </p>
                    <Link
                      className='event'
                      to={`/details/${hero.id}`}
                      key={hero.id}
                    >
                      <h3>Click for more details.</h3>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListHeroes;
