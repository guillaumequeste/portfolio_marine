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
              <div className="typeEtude">
                <div className="typeEtude_nom">
                  <a href="https://www.efcde.com" target="_blank">
                    <img
                      src={require("../img/EFCDE.png")}
                      alt="efcde"
                      className="logoEcole"
                    ></img>
                  </a>
                </div>
                <div className="typeEtude_annee">
                  <p className="typeEtude_nom_p">2020</p>
                </div>
              </div>
              <div className="descEtude">
                <h5 className="descEtude_nom_h5">Wedding Planner Designer</h5>
                <p className="descEtude_nom_p">(formation à distance)</p>
                <p className="descEtude_nom_p">
                  EFCDE (Ecole Française des Créateurs et Décorateurs
                  d'Evènements)
                </p>
                <p className="descEtude_nom_p">- Montpellier (34) -</p>
              </div>
            </div>
            <div className="etude">
              <div className="typeEtude">
                <div className="typeEtude_nom">
                  <a href="https://www.esepac.com" target="_blank">
                    <img
                      src={require("../img/ESEPAC.png")}
                      alt="esepac"
                      className="logoEcole"
                    ></img>
                  </a>
                </div>
                <div className="typeEtude_annee">
                  <p className="typeEtude_nom_p">2013</p>
                </div>
              </div>
              <div className="descEtude">
                <h5 className="descEtude_nom_h5">Ingénieur Packaging</h5>
                <p className="descEtude_nom_p">
                  ESEPAC (Ecole Supérieure Euopéenne de Packaging)
                </p>
                <p className="descEtude_nom_p">- St Germain Laprade (43) -</p>
              </div>
            </div>
            <div className="etude">
              <div className="typeEtude">
                <div className="typeEtude_nom">
                  <a href="http://iutevreux.univ-rouen.fr/" target="_blank">
                    <img
                      src={require("../img/IUT.png")}
                      alt="iut"
                      className="logoEcole"
                    ></img>
                  </a>
                </div>
                <div className="typeEtude_annee">
                  <p className="typeEtude_nom_p">2009</p>
                </div>
              </div>
              <div className="descEtude">
                <h5 className="descEtude_nom_h5">
                  IUT Génie du Conditionnement et de l'Emballage
                </h5>
                <p className="descEtude_nom_p">IUT d'Evreux</p>
                <p className="descEtude_nom_p">- Evreux (27) -</p>
              </div>
            </div>
            <div className="etude">
              <div className="typeEtude">
                <div className="typeEtude_nom_vertical">
                  <a href="http://ango-lyc.spip.ac-rouen.fr/" target="_blank">
                    <img
                      src={require("../img/lycee.jpg")}
                      alt="lycee"
                      className="logoEcole"
                    ></img>
                  </a>
                </div>
                <div className="typeEtude_annee">
                  <p className="typeEtude_nom_p">2005</p>
                </div>
              </div>
              <div className="descEtude">
                <h5 className="descEtude_nom_h5">
                  Baccalauréat Scientifique, Option SVT
                </h5>
                <p className="descEtude_nom_p">Lycée Jehan Ango</p>
                <p className="descEtude_nom_p">- Dieppe (76) -</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Etudes;
