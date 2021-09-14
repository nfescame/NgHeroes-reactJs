// import axios from "axios";
import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css"
// import reactDom from "react-dom";

class NewPlayer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>
            <h4>Insert your Name</h4>
            <form className='namePlayer'>
              <input
                type='text'
                id='namePlayer'
                placeholder='Name'
                label='Name'
                onChange={this.props.handleChangeName}
                value={this.props.state.playerName}
              />
            </form>
          </p>
          <p>
            <h4>Insert a name for your Squad</h4>
            <form className='nameSquad'>
              <input
                type='text'
                id='nameSquad'
                placeholder='Type a name for your Squad'
                label='Squad'
                onChange={this.props.handleChangeSquad}
                value={this.props.state.squadName}
              />
            </form>
          </p>
        </div>
        <h4> Choose your Heroes </h4>

        <div>
          <p>
            <button type='submit' onClick={this.props.handleSubmitAll}>
              Save
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default NewPlayer;
