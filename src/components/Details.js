import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

class Details extends React.Component {
  state = {
    name: "",
    img: "",
    id: "",
    powerStats: {},
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
      });
    } catch (err) {
      console.error(err);
    }

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className='card m-4' style={{ width: "19rem" }}>
          <img
            src={this.state.img}
            className='card-img-top rounded'
            alt={this.state.id}
          />
          <div className='card-body'>
            <h5 className='card-title'>{this.state.name}</h5>
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
          <div className='card-body d-flex justify-content-between'>
            <Link to='/listheroes' className='card-link'>
              Back to List
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
