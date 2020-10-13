import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";
import { NavLink } from "react-router-dom";

class Book extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Book Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/book"}
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
                      <NavLink className="nav-link aRond" to="/carte_de_visite">
                        <div className="lienCarte">+</div>
                      </NavLink>
                    </div>
                    <div className="up upCarteDeVisite"></div>
                    <div className="down">
                      <h6 className="titreDown">Cartes de visite</h6>
                    </div>
                  </div>
                </div>

                {/* card faire-part */}
                <div className="col-md-4 col-sm-6 col-12 divCarte">
                  <div className="carte">
                    <div className="couvCarte">
                      <NavLink className="nav-link aRond" to="/faire_part">
                        <div className="lienCarte">+</div>
                      </NavLink>
                    </div>
                    <div className="up upFairePart"></div>
                    <div className="down">
                      <h6 className="titreDown">Faireparts</h6>
                    </div>
                  </div>
                </div>

                {/* card affiche */}
                <div className="col-md-4 col-sm-6 col-12 divCarte">
                  <div className="carte">
                    <div className="couvCarte">
                      <NavLink className="nav-link aRond" to="/affiche">
                        <div className="lienCarte">+</div>
                      </NavLink>
                    </div>
                    <div className="up upAffiche"></div>
                    <div className="down">
                      <h6 className="titreDown">Affiches</h6>
                    </div>
                  </div>
                </div>

                {/* card dossiers clients */}
                <div className="col-md-4 col-sm-6 col-12 divCarte">
                  <div className="carte">
                    <div className="couvCarte">
                      <NavLink className="nav-link aRond" to="/dossier_clients">
                        <div className="lienCarte">+</div>
                      </NavLink>
                    </div>
                    <div className="up upDossierClients"></div>
                    <div className="down">
                      <h6 className="titreDown">Dossiers clients</h6>
                    </div>
                  </div>
                </div>

                {/* card autre */}
                <div className="col-md-4 col-sm-6 col-12 divCarte">
                  <div className="carte">
                    <div className="couvCarte">
                      <NavLink className="nav-link aRond" to="/autre">
                        <div className="lienCarte">+</div>
                      </NavLink>
                    </div>
                    <div className="up upAutre"></div>
                    <div className="down">
                      <h6 className="titreDown">Autres</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 divCarte sixieme">
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">six</div>
                      </div>
                    </div>
                    <div className="up">up</div>
                    <div className="down">down</div>
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

export default Book;
