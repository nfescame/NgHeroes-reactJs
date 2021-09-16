import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
  state = {
    typed: "",
    publisher: [],
    select: "",
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.typed !== this.state.typed) {
      this.props.filterHeroesName(this.state.typed);
    }
    if (prevState.select !== this.state.select) {
      this.props.filterPublisher(this.state.select);
    }
  };
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://akabab.github.io/superhero-api/api/all.json`
      );

      let all = response.data.map((hero) => {
        return hero.biography.publisher;
      });

      var novaArr = all.filter((este, i) => all.indexOf(este) === i);

      this.setState({ publisher: [...novaArr] });
    } catch (err) {
      console.error(err);
    }
  };

  handleSearchPublisher = (event) => {
    this.setState({ select: event.target.value });
  };

  handleSearch = (event) => {
    this.setState({ typed: event.target.value });
  };

  render() {
    return (
      <div className='d-flex justify-content-start my-4 '>
        <div className='searchBar'>
          <label className='d-flex align-items-center mx-2'>Search: </label>
          <input
            type='text'
            className='input search-bar ms-2 mx-5'
            onChange={this.handleSearch}
            value={this.state.typed}
          />
          <label className='d-flex align-items-center mx-2'>Publisher: </label>
          <select
            className='form-select  mx-2'
            aria-label='Default select example'
            onClick={this.handleSearchPublisher}
          >
            <option selected>Open this select Publisher </option>
            {this.state.publisher.map((publ) => {
              return <option>{publ}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default SearchBar;
