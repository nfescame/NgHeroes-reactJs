import React from "react";
import axios from "axios";

class CreateTopFive extends React.Component {
  state = {
    name: "",
    nameSquad: "",
    allFavFive: [],
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
        <h1>This is your Squad!</h1>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>iD</th>
              <th>your squad members</th>
              {/* <th>Durability: {props.powerStats.durability}</th>
              <th>Intelligence: {this.state.powerStats.intelligence}</th>
              <th>Power: {this.state.powerStats.power}</th>
              <th>Speed: {this.state.powerStats.speed}</th>
              <th>Strength: {this.state.powerStats.strength}</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.allFavFive.map(() => {
              return (
                <tr>
                  <th>"id"</th>
                  <td>"name"</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// {/* <form className='input-group mb-3 d-'>
//   <label>Name: </label>
//   <input
//     type='text'
//     className='form-control'
//     name='name'
//     value={this.state.name}
//     onChange={this.handleChange}
//   />

//   <label>Name Squad: </label>
//   <input
//     type='text'
//     className='form-control'
//     name='nameSquad'
//     value={this.state.nameSquad}
//     onChange={this.handleChange}
//   />
// </form>
// <button
//   className='btn-primary'
//   type='submit'
//   onClick={this.handleSubmit}
// >
//   ADD
// </button> */}

export default CreateTopFive;
