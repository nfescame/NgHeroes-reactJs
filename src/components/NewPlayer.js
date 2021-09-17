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
                maxlength='15'
                type='text'
                id='namePlayer'
                placeholder='limited to 15 characters'
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
                maxlength='8'
                type='text'
                id='nameSquad'
                placeholder='limited to 8 characters'
                label='Squad'
                onChange={this.props.handleChangeSquad}
                value={this.props.state.squadName}
              />
            </form>
          </p>
        </div>

        <div className='mx-3'>
          <p>
            <button
              type='submit'
              class='btn btn-primary'
              onClick={this.props.handleSubmitAll}
            >
              Save
            </button>
          </p>
          <h4 className='my-2 text-light'> Choose your Heroes </h4>
        </div>
      </div>
    );
  }
}

export default NewPlayer;
