/* eslint-disable no-lone-blocks */
import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import imgTrash from "../assets/img/trash-fill.svg";
import imgEdit from "../assets/img/edit.svg";

import { Link } from "react-router-dom";
class MySquad extends React.Component {
  state = {
    all: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/NGHeroes"
      );

      this.setState({ all: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  delete = (event) => {
    axios
      .delete(`https://ironrest.herokuapp.com/NGHeroes/${event.target.name}`)
      .then((response) => {
        this.props.history.push("/");
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className='bg-dark'>
        <NavBar />
        <div>
          {this.state.all.map((card) => {
            return (
              <div className='d-flex mb-5'>
                <div className='card ' style={{ width: "30rem" }}>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                      <h5 className='card-title'>Squad: {card.squadName}</h5>
                      <div className='d-flex'>
                        <img
                          className='mx-3'
                          onClick={this.delete}
                          name={card._id}
                          src={imgTrash}
                          alt='description'
                          style={{ width: "3rem" }}
                        />
                        <Link to={`/listheroes/${card._id}`}>
                          <img
                            onClick={this.edit}
                            name={card._id}
                            src={imgEdit}
                            alt='description'
                            style={{ width: "3rem" }}
                          />
                        </Link>
                      </div>
                    </div>
                    <p className='card-text'>Creator by: {card.playerName}</p>
                  </div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      Combat: {card.combat / 5}
                    </li>
                    <li className='list-group-item'>
                      Durability: {card.durability / 5}
                    </li>
                    <li className='list-group-item'>
                      Intelligence: {card.intelligence / 5}
                    </li>
                    <li className='list-group-item'>Power: {card.power / 5}</li>
                    <li className='list-group-item'>Speed: {card.speed / 5}</li>
                    <li className='list-group-item'>
                      Strength: {card.strength / 5}
                    </li>
                  </ul>
                </div>
                <div className='d-flex'>
                  {card.allFavImg.map((elem) => {
                    return (
                      <div>
                        <img
                          className='rounded'
                          src={elem.img}
                          alt='description'
                          style={{ width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MySquad;
