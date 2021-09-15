/* eslint-disable no-lone-blocks */
import React from "react";
import NavBar from "./NavBar";
import axios from "axios";

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
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        fill='currentColor'
                        class='bi bi-trash'
                        viewBox='0 0 16 16'
                      >
                        <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                        <path
                          fill-rule='evenodd'
                          d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                        />
                      </svg>
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
