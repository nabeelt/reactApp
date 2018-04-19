import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <header className="header">
          This is header
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>&nbsp;
              </li>
              <li>
                <Link to="/about">About</Link>&nbsp;
              </li>
            </ul>
          </nav>
        </header>
        <div className="main-container">
          {this.props.children ? (
            this.props.children
          ) : (
            <h1>NO Layout specified</h1>
          )}
        </div>
        <footer className="footer">This is footer</footer>
      </div>
    );
  }
}

export default withRouter(Template);
