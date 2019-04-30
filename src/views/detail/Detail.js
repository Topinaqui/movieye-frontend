import React, { Component } from "react";

class Detail extends Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default Detail;
