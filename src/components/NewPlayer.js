import axios from "axios";
import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css"
import reactDom from "react-dom";

class NewPlayer extends React.Component {
  state = {
    playerName: "",
    squadName: "",
    favFive1: "",
    favFive2: "",
    favFive3: "",
    favFive4: "",
    favFive5: "",
    allFavFive: []
  };

  handleSubmitName = (event) => {
    event.preventDefault();
    axios.post(URL, this.state).then((response) => console.log(response)).catch((err) => console.error(err));
    // this.setState({ text: event.target.playerName });
  }

  handleSubmitSquad(event) {
    this.setState({ text: event.target.squadName });
  }

  handleSubmitFav1(event) {
    this.setState({ text: event.target.favFive1 });
  }
  handleSubmitFav2(event) {
    this.setState({ text: event.target.favFive2 });
  }

  handleSubmitFav3(event) {
    this.setState({ text: event.target.favFive3 });
  }

  handleSubmitFav4(event) {
    this.setState({ text: event.target.favFive4 });
  }

  handleSubmitFav5(event) {
    this.setState({ text: event.target.favFive5 });
  }

  //handlePickFive(event) {}

  render() {
    return (
      <div>
        <div>

        <p>
        <h4>Insert your Name</h4>
          <form className="namePlayer">
            <input
              type="text"
              id="namePlayer"
              placeholder="Name"
              label="Name"
              onChange={this.setState.playerName}
              value={this.state.playerName}
            />
            <button type="submit" onChange={this.handleSubmitName}>Save</button>
          </form>
          </p>

          <p>
          <h4>Insert a name for your Squad</h4>
          <form className="nameSquad">
            <input
              type="text"
              id="nameSquad"
              placeholder="Type a name for your Squad"
              label="Squad"
              onChange={this.setState.squadName}
              value={this.state.squadName}
              />
            <button type="submit" onChange={this.handleSubmitSquad}>Save</button>
          </form>
          </p>
        </div>

        <div>

        <p>
        <h5>Choose 5 characters</h5>
        <form className="heroesList"></form>
          <input
            type="text"
            id="favFive1"
            placeholder="Type a heroes´ name"
            label="favFive"
            onChange={this.setState.favFive1}
            value={this.state.favFive1}
          />
          <button type="submit" onChange={this.handleSubmitFav1}>Save no. 1</button>
        </p>
        
        <p>
          <input
            type="text"
            id="favFive2"
            placeholder="Type a heroes´ name"
            label="favFive"
            onChange={this.setState.favFive2}
            value={this.state.favFive2}
          />
          <button type="submit"  onChange={this.handleSubmitFav2}>Save no. 2</button>
          </p>
          <p>
          <input
            type="text"
            id="favFive3"
            placeholder="Type a heroes´ name"
            label="favFive"
            onChange={this.setState.favFive3}
            value={this.state.favFive3}
            />
          <button type="submit" onChange={this.handleSubmitFav3}>Save no. 3</button>
          </p>

          <p>
          <input
            type="text"
            id="favFive4"
            placeholder="Type a heroes´ name"
            label="favFive"
            onChange={this.setState.favFive4}
            value={this.state.favFive4}
          />
          <button type="submit" onChange={this.handleSubmitFav4}>Save no. 4</button>
          </p>

          <p>
          <input
            type="text"
            id="favFive5"
            placeholder="Type a heroes´ name"
            label="favFive"
            onChange={this.setState.favFive5}
            value={this.state.favFive5}
          />
          <button type="submit" onChange={this.handleSubmitFav5}>Save no. 5</button>
          </p>

        </div>
      </div>
    );
  }
}

export default NewPlayer;
