import React, {
  Component
} from "react";
import {
  Link
} from "react-router-dom";


class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.movieID = null;
  }

  openMovieDetails(movieID) {
    this.setState({ movieID });
    console.log("OpenDetails: ", movieID);
  }

  componentDidMount() {
    const {
      match
    } = this.props;

    this.openMovieDetails(match.params.id);
  }

  render() {
    return (<p> building... {this.state.movieID}</p>);
  }
}

export default Detail;