import React, { Component } from "react"
import Header from "./Header"
import Helmet from "./Helmet"
import En_tete from "./En_tete";

class Experiences_professionnelles extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Expériences professionnelles Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/experiences_professionnelles"}
        />
        <Header />
        <div className="bodyPage">
          <En_tete />
          <div className="detailsExp_pro">
            <p>expériences professionnelles</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences_professionnelles;
