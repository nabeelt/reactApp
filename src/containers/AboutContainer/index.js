import React, { Component } from "react";
import Template from "../../template";
import About from "../../components/about";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Template>
        <About />
      </Template>
    );
  }
}

export default AboutContainer;
