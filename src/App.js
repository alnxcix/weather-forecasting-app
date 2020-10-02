import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      api: {},
      apiKey: "32877457c1a7eb9d048dbd4696c7a77a",
      coord: [14.6042, 120.9822],
      isLoading: true,
      units: "metric",
    };
  }
  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.coord[0]}&lon=${this.state.coord[1]}&units=${this.state.units}&exclude=minutely&appid=${this.state.apiKey}`
    )
      .then((res) => res.json())
      .then((res) => this.setState(() => ({ api: res, isLoading: false })));
  }
  render() {
    return this.state.isLoading ? (
      <div className="d-block mx-auto my-5 spinner-border" />
    ) : (
      <div>
        <Header />
        <MainContent {...this.state.api} />
        <Footer />
      </div>
    );
  }
}
