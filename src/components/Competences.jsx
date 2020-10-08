import React, { Component } from "react"
import Header from "./Header"
import Helmet from "./Helmet"
import En_tete from "./En_tete";

class Competences extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Competences Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/competences"}
        />
        <Header />
        <div className="bodyPage">
          <En_tete />
          <div className="detailsCompetences">
            <p>compétences</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Competences;
