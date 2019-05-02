import React, { Component } from "react";

import SearchHeader from "../../components/SearchHeader/SearchHeader";
import MoviesList from "../../components/MoviesList/MoviesList";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.results = [];
  }

  searchHandler(searchResult) {
    this.setState({ results: searchResult.results });
  }

  showMovieDetails(movieID) {
    const { history } = this.props;

    history.push(`/details/${movieID}`);
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <SearchHeader
          searchHandler={searchResult => this.searchHandler(searchResult)}
        />
        <MoviesList
          list={results}
          handler={movieID => this.showMovieDetails(movieID)}
        />
      </div>
    );
  }
}

export default Main;
