import React, { Component } from "react"
import Header from "./Header"
import Helmet from "./Helmet"
import En_tete from "./En_tete";

class Etudes extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Etudes Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/etudes"}
        />
        <Header />
        <div className="bodyPage">
          <En_tete />
          <div className="detailsEtudes">
            <p>études</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Etudes;
