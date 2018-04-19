import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/common.css";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/about" component={AboutContainer} />
    </Switch>
  </BrowserRouter>
);
