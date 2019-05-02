import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
            className={classes.item}
            key={movie.id}
            onClick={event => this.onClickHandler(movie.id)}
          >
            <ListItemText
              primary={movie.title}
              secondary={`Release date: ${movie.release_date}`}
            />
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
  item: {
    cursor: "pointer"
  },
  inline: {
    display: "inline"
  }
});

export default withRouter(withStyles(styles)(MoviesList));
