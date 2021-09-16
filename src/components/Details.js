import React from "react";
import axios from "axios";
import NavBar from "./NavBar";
import arrow from "../assets/img/arrow.svg";

import { Link } from "react-router-dom";

class Details extends React.Component {
  state = {
    name: "",
    img: "",
    id: "",
    powerStats: {},
    appearance: {},
    biography: {},
    work: {},
    connections: {},
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://akabab.github.io/superhero-api/api/id/${this.props.match.params.HeroId}.json`
      );

      this.setState({
        name: response.data.name,
        img: response.data.images.md,
        id: response.data.id,
        powerStats: response.data.powerstats,
        appearance: response.data.appearance,
        biography: response.data.biography,
        work: response.data.work,
        connections: response.data.connections,
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className='bg-dark'>
        <NavBar />
        <div className='cardDetais rounded mx-auto'>
          <div className='card m-4' style={{ width: "19rem" }}>
            <img
              src={this.state.img}
              className='card-img-top rounded'
              alt={this.state.id}
            />
            <div className='card-body d-flex justify-content-between'>
              <h5 className='card-title'>{this.state.name}</h5>
              <Link
                to='/listheroes'
                className='card-link'
                style={{ textDecoration: "none" }}
              >
                <i class='fas fa-arrow-left'>Back</i>
              </Link>
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                Combat: {this.state.powerStats.combat}
              </li>
              <li className='list-group-item'>
                Durability: {this.state.powerStats.durability}
              </li>
              <li className='list-group-item'>
                Intelligence: {this.state.powerStats.intelligence}
              </li>
              <li className='list-group-item'>
                Power: {this.state.powerStats.power}
              </li>
              <li className='list-group-item'>
                Speed: {this.state.powerStats.speed}
              </li>
              <li className='list-group-item'>
                Strength: {this.state.powerStats.strength}
              </li>
            </ul>
          </div>

          {/* details */}
          {/* Appearance */}
          <div className='mx-5 row row-cols-1'>
            <div
              className='card text-white bg-danger mb-3 col'
              style={{ maxWidth: "30rem" }}
            >
              <h1>Appearance</h1>
              <div className='card-body'>
                <p>Gender: {this.state.appearance.gender} </p>
                <p>Race: {this.state.appearance.race}</p>
                <p>Height: {this.state.appearance.height}</p>
                <p>Weight: {this.state.appearance.weight}</p>
                <p>EyeColor: {this.state.appearance.eyeColor}</p>
                <p>HairColor: {this.state.appearance.hairColor}</p>
              </div>
            </div>
            {/* Biography */}
            <div
              className='card text-white bg-primary mb-3 col'
              style={{ maxWidth: "30rem" }}
            >
              <h1>Biography</h1>
              <div className='card-body'>
                <p>FullName: {this.state.biography.fullName} </p>
                <p>AlterEgos: {this.state.biography.alterEgos}</p>
                <p>Aliases: {this.state.biography.aliases}</p>
                <p>PlaceOfBirth: {this.state.biography.placeOfBirth}</p>
                <p>FirstAppearance: {this.state.biography.firstAppearance}</p>
                <p>Publisher: {this.state.biography.publisher}</p>
              </div>
            </div>
            {/* occupation */}
            <div
              className='card text-white bg-success mb-3 col'
              style={{ maxWidth: "30rem" }}
            >
              <h1>Work</h1>
              <div className='card-body'>
                <p>Occupation: {this.state.work.occupation} </p>
                <p>Base: {this.state.work.base}</p>
              </div>
            </div>
            {/* connections */}
            <div
              className='card text-white bg-info mb-3 col'
              style={{ maxWidth: "30rem" }}
            >
              <h1>Connections</h1>
              <div className='card-body'>
                <p>
                  Group Affiliation: {this.state.connections.groupAffiliation}
                </p>
                <p>Relatives: {this.state.connections.relatives}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
