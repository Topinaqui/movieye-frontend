import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { details } from "../../services/MovieyeServices";
import MovieCard from "../../components/MovieCard/MovieCard";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.movieID = null;
    this.state.movieDetails = {};
  }

  async searchDetails(movieID) {
    let movieDetails = await details(movieID);

    this.setState({ movieDetails });

    return movieDetails;
  }

  setMovieID(movieID) {
    this.setState({ movieID });
  }

  componentWillMount() {
    const { match } = this.props;

    this.setMovieID(match.params.id);

    this.searchDetails(match.params.id);
  }

  render() {
    const { movieDetails } = this.state;

    return (
      <div>
        {movieDetails ? <MovieCard movie={movieDetails} /> : "Not found"}
      </div>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {};

export default withStyles(styles)(Details);
