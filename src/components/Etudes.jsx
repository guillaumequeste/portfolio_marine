import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";

class Etudes extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Etudes Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/etudes"}
        />
        <Header />
        <div className="bodyContact">
          <p>etudes</p>
        </div>
      </div>
    );
  }
}

export default Etudes;
