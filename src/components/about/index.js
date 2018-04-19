import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      headerData: {}
    };
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <h1>This is about us page</h1>
      </div>
    );
  }
}

export default About;
