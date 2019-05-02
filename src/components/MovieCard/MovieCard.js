import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

class MovieCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  back() {
    const { history } = this.props;

    history.push("/");
  }

  render() {
    const { classes, movie } = this.props;
    let poster_path = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={poster_path}
          title="Paella dish"
        />
        <CardHeader
          title={movie.original_title}
          subheader={movie.release_date}
        />
        <CardContent>
          <Typography component="p">{movie.overview}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => this.back()}>
            Back
          </Button>
        </CardActions>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  card: {
    width: "100%"
  },
  media: {
    height: "500px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "0%"
    },
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

export default withRouter(withStyles(styles)(MovieCard));
