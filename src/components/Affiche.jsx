import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";
import { NavLink } from "react-router-dom";

class Affiche extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Book affiches Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/affiche"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="bodyBookDetails">
            <div className="retourBook">
              <NavLink to="/book" type="button" class="btn btn-primary">
                Retour au book
              </NavLink>
            </div>
            <div className="cardDetails">
              <div className="upDetails upDetailsAffiche">
                <h5 className="titreCardDetails">Affiches</h5>
              </div>
              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/affiche_dore.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/affiche_dore.jpg")}
                      alt="affiche_dore"
                      className="imgVerticale"
                    ></img>
                  </a>
                </div>
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/affiche_jazz.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/affiche_jazz.jpg")}
                      alt="affiche_jazz"
                      className="imgVerticale"
                    ></img>
                  </a>
                </div>
              </div>
              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/affiche_soiree_chic_choc.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/affiche_soiree_chic_choc.jpg")}
                      alt="affiche_soiree_chic_choc"
                      className="imgVerticale"
                    ></img>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Affiche;
