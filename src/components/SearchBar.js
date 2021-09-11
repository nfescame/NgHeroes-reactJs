import React from "react";

class SearchBar extends React.Component {
  state = {
    typed: "",
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.typed !== this.state.typed) {
      this.props.filterHeroesName(this.state.typed);
    }
  };

  handleSearch = (event) => {
    this.setState({ typed: event.target.value });
  };

  render() {
    return (
      <div className='d-flex justify-content-center my-3'>
        <label>Search Heroes:</label>
        <input
          type='text'
          className='input search-bar ms-2'
          onChange={this.handleSearch}
          value={this.state.typed}
        />
      </div>
    );
  }
}

export default SearchBar;
