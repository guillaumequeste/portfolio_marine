import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";

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
          <EnTete />
          <div className="detailsEtudes">
          <div className="etude">
              <div className="imgEtude"></div>
              <div className="texteEtude">
                <p className="pEtude">,yryj</p>
                <p className="pEtude">vze ljfrfrnvl j,r</p>
              </div>
            </div>
            <div className="etude">
              <div className="imgEtude"></div>
              <div className="texteEtude">
                <p className="pEtude">,yryj</p>
                <p className="pEtude">vze ljfrfrnvl j,r</p>
              </div>
            </div>
            <div className="etude">
              <div className="imgEtude"></div>
              <div className="texteEtude">
                <p className="pEtude">tyujt</p>
                <p className="pEtude">dfgn ljfnvl kzhfghbi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Etudes;
