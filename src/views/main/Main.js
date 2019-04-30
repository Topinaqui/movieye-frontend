import React, { Component } from "react";

import SearchHeader from "../../components/SearchHeader/SearchHeader";
import MoviesList from "../../components/MoviesList/MoviesList";

class Main extends Component {
  render() {
    return (
      <div>
        <SearchHeader />
        <MoviesList />
      </div>
    );
  }
}

export default Main;
