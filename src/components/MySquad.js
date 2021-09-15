/* eslint-disable no-lone-blocks */
import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import imgTrash from "../assents/img/trash-fill.svg";

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
    console.log(event.target.name);
    axios
      .delete(`https://ironrest.herokuapp.com/NGHeroes/${event.target.name}`)
      .then((response) => {
        console.log(response);
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

                      <img
                        onClick={this.delete}
                        name={card._id}
                        src={imgTrash}
                        alt='description'
                        style={{ width: "3rem" }}
                      />
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
