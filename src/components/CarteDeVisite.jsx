import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";
import { NavLink } from "react-router-dom";

class CarteDeVisite extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Book cartes de visite Portfolio de Marine Queste, chef de projet"
          }
          link={"https://marinequeste.fr/carte_de_visite"}
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
              <div className="upDetails upDetailsCarte">
                <h5 className="titreCardDetails">Cartes de visite</h5>
              </div>
              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/carte_de_visite_guillaume.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/carte_de_visite_guillaume.jpg")}
                      alt="carte de visite Guillaume"
                      className="imgHorizontale"
                    ></img>
                  </a>
                </div>
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/logo.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/logo.jpg")}
                      alt="logo"
                      className="imgHorizontale"
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

export default CarteDeVisite;
