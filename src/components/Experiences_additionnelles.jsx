import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";

class Experiences_additionnelles extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Expériences additionnelles Portfolio de Marine Queste, chef de projet"
          }
          link={"https://marinequeste.fr/experiences_additionnelles"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="detailsExp_add">
            <div className="exp_add">
              <h3 className="titreExpAdd">Membre du CE</h3>
              <h6 className="duree">3 ans</h6>
              <div className="detailsExpAdd">
                <ul>
                  <li>
                    Organisation des évènements de l'entreprise (fête de Noël,
                    40 ans, journées portes ouvertes, remise des médailles du
                    travail...).
                  </li>
                  <li>
                    Participation aux réunions mensuelles avec la direction.
                  </li>
                  <li>Mise en place des avantages pour les employés...</li>
                </ul>
              </div>
            </div>

            <div className="exp_add">
              <h3 className="titreExpAdd">Vice-présidente du BDE</h3>
              <h6 className="duree">3 ans</h6>
              <div className="detailsExpAdd">
                <ul>
                  <li>
                    Organisation des soirées à thème (Halloween, Noël, fin de session...).
                  </li>
                  <li>
                    Recherche de lieux, de prestataires.
                  </li>
                  <li>Création de flyers, affiches, cartons d'invitation...</li>
                  <li>Organisation du bal de promo annuel (lieu, budget, thème, musique, traiteur, flyers, préparation et gestion de l'évènement de A à Z, décoration...).</li>
                  <li>Recherche de partenariats pour l'annuaire des étudiants.</li>
                </ul>
              </div>
            </div>

            <div className="exp_add">
              <h3 className="titreExpAdd">Sauveteur secouriste du travail</h3>
              <h6 className="duree">4 ans</h6>
              <div className="detailsExpAdd">
                <ul>
                  <li>
                    Apprendre les gestes et attitudes à adopter lors d'un incident aussi bien dans la vie quotidienne qu'à l'entreprise.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Experiences_additionnelles;
