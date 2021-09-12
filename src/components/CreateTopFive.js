import React from "react";
import axios from "axios";

class CreateTopFive extends React.Component {
  state = {
    name: "",
    nameSquad: "",
    characters: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        // "https://ironrest.herokuapp.com/NGHeroes",
        this.state.name
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form className='input-group mb-3 d-'>
          <label>Name: </label>
          <input
            type='text'
            className='form-control'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>Name Squad: </label>
          <input
            type='text'
            className='form-control'
            name='nameSquad'
            value={this.state.nameSquad}
            onChange={this.handleChange}
          />
        </form>
        <button
          className='btn-primary'
          type='submit'
          onClick={this.handleSubmit}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default CreateTopFive;