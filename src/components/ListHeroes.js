import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import NewPlayer from "./NewPlayer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import imgTrash from "../assets/img/trash-fill.svg";

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
    let id = this.props.match.params.obj;
    if (id) {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/NGHeroes/${id}`
        );

        this.setState({ playerName: [response.data.playerName] });
        this.setState({ squadName: [response.data.squadName] });
        this.setState({ allFavImg: [...response.data.allFavImg] });
        this.setState({ allFavFive: [...response.data.allFavFive] });
        this.setState({ combat: [response.data.combat] });
        this.setState({ durability: [response.data.durability] });
        this.setState({ intelligence: [response.data.intelligence] });
        this.setState({ power: [response.data.power] });
        this.setState({ speed: [response.data.speed] });
        this.setState({ strength: [response.data.strength] });
      } catch (err) {
        console.error(err);
      }
    }
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

  handleSubmitAll = async (event) => {
    event.preventDefault();

    if (
      this.state.allFavFive.length === 5 &&
      this.state.playerName &&
      this.state.squadName
    ) {
      if (!this.props.match.params.obj) {
        const stateClone = { ...this.state };
        delete stateClone.allHeroes;
        axios
          .post("https://ironrest.herokuapp.com/NGHeroes", stateClone)
          .then((response) => {
            this.props.history.push("/mysquad");
          })

          .catch((err) => console.error(err));
      } else {
        console.log("edit");
        this.editSquad(event);
      }
    } else {
      alert("Campos obrigatórios: Name, Name Squaq e 5 personagens");
    }
  };

  editSquad = async (event) => {
    event.preventDefault();
    let id = this.props.match.params.obj;
    const stateClone = { ...this.state };
    delete stateClone.allHeroes;
    try {
      const response = await axios.put(
        `https://ironrest.herokuapp.com/NGHeroes/${id}`,
        stateClone
      );
      console.log(response);

      this.props.history.push("/mysquad");
    } catch (err) {
      console.error(err.response);
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

  deleteItem = (event, index) => {
    let cloneArrImg = [...this.state.allFavImg];
    let cloneArrFive = [...this.state.allFavFive];
    let cloneCombat = [this.state.combat];
    let cloneDurability = [this.state.durability];
    let cloneIntelligence = [this.state.intelligence];
    let clonePower = [this.state.power];
    let cloneSpeed = [this.state.speed];
    let cloneStrength = [this.state.strength];

    let id = parseInt(cloneArrFive[index]);

    this.state.allHeroes.map((hero) => {
      if (hero.id === id) {
        cloneCombat -= hero.powerstats.combat;
        cloneDurability -= hero.powerstats.durability;
        cloneIntelligence -= hero.powerstats.intelligence;
        clonePower -= hero.powerstats.power;
        cloneSpeed -= hero.powerstats.speed;
        cloneStrength -= hero.powerstats.strength;
      }
    });
    cloneArrImg.splice(index, 1);
    cloneArrFive.splice(index, 1);

    this.setState({
      allFavImg: [...cloneArrImg],
      allFavFive: [...cloneArrFive],
      combat: cloneCombat,
      durability: cloneDurability,
      intelligence: cloneIntelligence,
      power: clonePower,
      speed: cloneSpeed,
      strength: cloneStrength,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className='boxImg p-2'>
          <div>
            <NewPlayer
              handleChangeName={this.handleChangeName}
              state={this.state}
              handleChangeSquad={this.handleChangeSquad}
              handleSubmitAll={this.handleSubmitAll}
            />
          </div>
          <div className='imgSelect d-flex'>
            {this.state.allFavImg.map((img, index) => {
              return (
                <div className='p-3'>
                  <div className='border border-dark rounded aling'>
                    <img
                      className='rounded mx-auto d-block '
                      src={img.img}
                      alt='description'
                      style={{ width: "8rem" }}
                    />
                  </div>

                  <img
                    className='mx-auto d-block'
                    onClick={(event) => this.deleteItem(event, index)}
                    name={img.img}
                    src={imgTrash}
                    alt='description'
                    style={{ width: "2rem" }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className='row mx-2'>
          <div>
            <input
              type='checkbox'
              class='btn-check'
              id='btn-check'
              autocomplete='off'
              name='block'
              onClick={this.props.toogle}
            />
            <label class='btn btn-primary' htmlFor='btn-check'>
              Create Squad
            </label>
          </div>
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
