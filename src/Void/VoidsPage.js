import React, { Component } from "react";
import Header from "./Header";
const voidsURL = "http://localhost:3000/voids";
const moodsURL = "http://localhost:3000/moods";
import VoidForm from "./VoidForm";
import VoidContainer from "./VoidContainer";

export default class VoidsPage extends Component {
  state = {
    voids: [],
    moods: [],
  };

  //fetches both URLs and sets state
  componentDidMount() {
    Promise.all([
      fetch(voidsURL).then((response) => response.json()),
      fetch(moodsURL).then((response) => response.json()),
    ]).then(([all_voids, all_moods]) =>
      this.setState({ moods: all_moods, voids: all_voids })
    );
  }
  // updates state of void entries upon POST request
  addVoids = (voids) => {
    this.setState({
      voids: [...this.state.voids, voids],
    });
  };

  //deletes void entry from front and back end
  handleDelete = (voids) => {
    fetch(`${voidsURL}/${voids.id}`, {
      method: "DELETE",
    });
    const VoidCollection = this.state.voids.filter((vd) => vid !== voids);
    this.setState({ voids: VoidCollection });
  };

  render() {
    return (
      <div className="voids-page">
        <Header />
        <VoidForm moods={this.state.moods} addVoids={this.addVoids} />
        <VoidContainer voids={this.state.voids} delete={this.handleDelete} />
      </div>
    );
  }
}