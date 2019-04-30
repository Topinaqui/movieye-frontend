import React, { Component } from "react";

import axios from "axios";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

class MoviesList extends Component {
  apiFetcher() {
    console.log("Vai chamar a API");

    let form = new FormData();
    form.set("query", "Rambo");

    const http = axios.create({
      baseURL: "http://localhost:8000/api",
      headers: { "Access-Control-Allow-Origin": "*" }
    });

    http
      .get("/search", {
        query: "Rambo"
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.apiFetcher();
  }

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Title"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {" "}
                  Sinopse{" "}
                </Typography>{" "}
                {" Movie Sinopse... ... ..."}{" "}
              </React.Fragment>
            }
          />{" "}
        </ListItem>
      </List>
    );
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

export default withStyles(styles)(MoviesList);
