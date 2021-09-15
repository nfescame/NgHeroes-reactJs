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
    combat: 0,
    durability: 0,
    intelligence: 0,
    power: 0,
    speed: 0,
    strength: 0,
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
      console.log("arr", newArr);
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
      const combat = this.state.allHeroes[index].powerstats.combat;
      const durability = this.state.allHeroes[index].powerstats.durability;
      const intelligence = this.state.allHeroes[index].powerstats.intelligence;
      const power = this.state.allHeroes[index].powerstats.power;
      const speed = this.state.allHeroes[index].powerstats.speed;
      const strength = this.state.allHeroes[index].powerstats.strength;

      let cloneImg = [...this.state.allFavImg];
      let cloneCombat = [this.state.combat];
      let cloneDurability = [this.state.durability];
      let cloneIntelligence = [this.state.intelligence];
      let clonePower = [this.state.power];
      let cloneSpeed = [this.state.speed];
      let cloneStrength = [this.state.strength];

      cloneImg.push({ img });
      cloneCombat = parseInt(cloneCombat) + parseInt(combat);
      cloneDurability = parseInt(cloneDurability) + parseInt(durability);
      cloneIntelligence = parseInt(cloneIntelligence) + parseInt(intelligence);
      clonePower = parseInt(clonePower) + parseInt(power);
      cloneSpeed = parseInt(cloneSpeed) + parseInt(speed);
      cloneStrength = parseInt(cloneStrength) + parseInt(strength);

      this.setState({
        allFavImg: [...cloneImg],
        combat: cloneCombat,
        durability: cloneDurability,
        intelligence: cloneIntelligence,
        power: clonePower,
        speed: cloneSpeed,
        strength: cloneStrength,
      });
    } else {
      alert("Character be select");
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <NavBar />
        <div className='d-flex container p-3'>
          <div>
            <NewPlayer
              handleChangeName={this.handleChangeName}
              state={this.state}
              handleChangeSquad={this.handleChangeSquad}
              handleSubmitAll={this.handleSubmitAll}
            />
          </div>
          <div className='d-flex'>
            {this.state.allFavImg.map((img) => {
              return (
                <div className='p-3'>
                  <img
                    className='m-0 rounded-circle border border-primary'
                    src={img.img}
                    alt='description'
                    style={{ width: "8rem" }}
                  />
                </div>
              );
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
