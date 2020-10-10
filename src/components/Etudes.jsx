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
                  <h5 className="typeEtude_nom_h5">EFCDE</h5>
                </div>
                <div className="typeEtude_annee">
                  <p className="typeEtude_nom_p">2020</p>
                </div>
              </div>
              <div className="descEtude">
                <h5 className="descEtude_nom_h5">Wedding Planner Designer</h5>
                <p className="descEtude_nom_p">(formation à distance)</p>
                <p className="descEtude_nom_p">EFCDE (Ecole Française des Créateurs et Décorateurs d'Evènements)</p>
                <p className="descEtude_nom_p">- Montpellier (34) -</p>
              </div>
            </div>
            <div className="etude">
              <div className="typeEtude">
                <div className="typeEtude_nom">
                  <h5 className="typeEtude_nom_h5">ESEPAC</h5>
                </div>
                <div className="typeEtude_annee">
                  <p className="typeEtude_nom_p">2013</p>
                </div>
              </div>
              <div className="descEtude">
                <h5 className="descEtude_nom_h5">Ingénieur Packaging</h5>
                <p className="descEtude_nom_p">ESEPAC (Ecole Supérieure Euopéenne de Packaging)</p>
                <p className="descEtude_nom_p">- St Germain Laprade (43) -</p>
              </div>
            </div>
            <div className="etude">
              <div className="typeEtude">
                <div className="typeEtude_nom">
                  <h5 className="typeEtude_nom_h5">IUT</h5>
                </div>
                <div className="typeEtude_annee">
                  <p className="typeEtude_nom_p">2009</p>
                </div>
              </div>
              <div className="descEtude">
                <h5 className="descEtude_nom_h5">IUT Génie du Conditionnement et de l'Emballage</h5>
                <p className="descEtude_nom_p">IUT d'Evreux</p>
                <p className="descEtude_nom_p">- Evreux (27) -</p>
              </div>
            </div>
            <div className="etude">
              <div className="typeEtude">
                <div className="typeEtude_nom">
                  <h5 className="typeEtude_nom_h5">Lycée</h5>
                </div>
                <div className="typeEtude_annee">
                  <p className="typeEtude_nom_p">2005</p>
                </div>
              </div>
              <div className="descEtude">
                <h5 className="descEtude_nom_h5">Baccalauréat Scientifique, Option Sciences de la Vie et de la Terre</h5>
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
