import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { details } from "../../services/MovieyeServices";

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
    const { classes } = this.props;
    const { movieDetails } = this.state;

    return <p>{movieDetails ? movieDetails.original_title : "Not found?"}</p>;
  }
}

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
