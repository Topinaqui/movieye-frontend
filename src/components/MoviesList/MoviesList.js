import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import axios from "axios";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

class MoviesList extends Component {
  onClickHandler(movieID) {
    const { handler } = this.props;

    return (typeof handler === "function" && handler(movieID)) || movieID;
  }

  render() {
    const { list } = this.props;
    const { classes } = this.props;

    return (
      <List className={classes.root}>
        {list.map(movie => (
          <ListItem
            key={movie.id}
            onClick={event => this.onClickHandler(movie.id)}
          >
            <ListItemText primary={movie.title} secondary={movie.overview} />
          </ListItem>
        ))}
      </List>
    );
  }
}

MoviesList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired
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
