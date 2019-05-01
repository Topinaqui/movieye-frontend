import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import axios from "axios";

import PropTypes from "prop-types";
import {
  withStyles
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import SEARCH_RESULT from "./resources/listFack";


class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.SEARCH_RESULT = SEARCH_RESULT;

    console.log("Resultado");
    console.log(SEARCH_RESULT);
  }

  apiFetcher() {
    let form = new FormData();
    form.set("query", "Rambo");

    // const http = axios.create({
    //   baseURL: "http://localhost:8000/api",
    //   headers: { "Access-Control-Allow-Origin": "*" }
    // });

    // http
    //   .get("/search", {
    //     query: "Rambo"
    //   })
    //   .then(({ data }) => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  showMovieDetails(movieID) {
    const { history } = this.props;

    history.push(`/details/${movieID}`);

  }

  componentDidMount() {
    this.apiFetcher();
  }

  render() {
    const { results } = SEARCH_RESULT;
    const { classes } = this.props;

    return (<List className={classes.root}>
      {results.map((movie) => <ListItem key={movie.id} onClick={event => this.showMovieDetails(movie.id)}>
        <ListItemText primary={movie.title} secondary={movie.overview} />
      </ListItem>)}
    </List>);
  }
}

MoviesList.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

export default withRouter(withStyles(styles)(MoviesList));