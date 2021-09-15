import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css"

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
      <div className='d-flex justify-content-start my-4 '>
        <label>Search: </label>
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
