import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";

class DossierClients extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Book Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/dossier_clients"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="detailsBook">
            <div className="container">
              <div className="row">
                {/* card carte de visite */}
                <div className="col-md-4 col-sm-6 col-12 divCarte">
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">
                          <button>+</button>
                        </div>
                      </div>
                    </div>
                    <div className="up upCarteDeVisite"></div>
                    <div className="down">
                      <h6 className="titreDown">Dossiers clients</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DossierClients;
