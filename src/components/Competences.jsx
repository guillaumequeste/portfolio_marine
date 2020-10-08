import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";

class Competences extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Compétences Portfolio de Marine Queste, chef de projet"
          }
          link={"https://marinequeste.fr/competences"}
        />
        <Header />
        <div className="bodyContact">
          <p>compétences</p>
        </div>
      </div>
    );
  }
}

export default Competences;
