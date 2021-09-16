import React from "react";
class NewPlayer extends React.Component {
  render() {
    return (
      <div>
        <div className='mx-3'>
          <h1 className='text-light'>Create Your Squad Here.</h1>
          <p>
            <h4 className='text-light'>Your Name:</h4>
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
            <h4 className='text-light'>Name Squad:</h4>
            <form className='nameSquad'>
              <input
                type='text'
                id='nameSquad'
                placeholder='Name Squad'
                label='Squad'
                onChange={this.props.handleChangeSquad}
                value={this.props.state.squadName}
              />
            </form>
          </p>
        </div>

        <div className='mx-3'>
          <p>
            <button type='submit' onClick={this.props.handleSubmitAll}>
              Save
            </button>
          </p>
          <h4 className='my-5 text-light'> Choose your Heroes </h4>
        </div>
      </div>
    );
  }
}

export default NewPlayer;
