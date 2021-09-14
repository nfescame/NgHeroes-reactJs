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
      //   console.log(response.data);
      this.setState({ all: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    // console.log(this.state.all);
    return (
      <div>
        <div>
          <NavBar />
          <div>
            {this.state.all.map((card) => {
              {
                console.log(card.playerName);

                return card.allFavImg.map((myImg) => {
                  {
                    return (
                      <div>
                        <h1>{card.playerName}</h1>;
                        <img
                          src={myImg.img}
                          alt='description'
                          style={{ width: "10%" }}
                        />
                      </div>
                    );
                  }
                });
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MySquad;
