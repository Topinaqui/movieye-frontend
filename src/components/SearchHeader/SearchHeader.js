import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { search } from "../../services/MovieyeServices";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.searchQuery = "";
  }

  async searchMovies(query = null) {
    if (!query) return;

    let searchResult = await search(query);

    this.handleSearch(searchResult);
  }

  setSearchQuery({ value }) {
    this.setState({ searchQuery: value });
  }

  ifEnterTriggerSearch(key) {
    if (key === "Enter") {
      const { searchQuery } = this.state;

      this.searchMovies(searchQuery);
    }
  }

  handleSearch(searchResult) {
    const { searchHandler } = this.props;

    return (
      (typeof searchHandler === "function" && searchHandler(searchResult)) ||
      searchResult
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            MovieYe
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              autoComplete="on"
              placeholder="Search movies"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              onChange={({ target }) => this.setSearchQuery(target)}
              onKeyPress={({ key }) => this.ifEnterTriggerSearch(key)}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop} />
          <div className={classes.sectionMobile} />
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

export default withStyles(styles)(Header);
