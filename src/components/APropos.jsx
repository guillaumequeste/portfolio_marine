import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";

class APropos extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Guillaume Queste Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/a_propos"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="bodyAPropos">
            <div className="lienAPropos">
              <h5>Site réalisé par :</h5>
              <h5>Guillaume Queste</h5>
              <a href="https://www.guillaumequeste.fr" target="_blank" className="url">
                https://www.guillaumequeste.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default APropos;
