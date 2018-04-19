import React, { Component } from "react";

class HomePage extends Component {
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
        <h1>This is home page</h1>
      </div>
    );
  }
}

export default HomePage;
