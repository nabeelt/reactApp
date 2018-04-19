import React, { Component } from "react";
import { withRouter } from "react-router";
import Template from "../../Template";
import HomePage from "../../components/HomePage";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <Template>
          <HomePage />
        </Template>
      </div>
    );
  }
}

export default HomeContainer;
