import React, { Component } from "react";
import Header from "./Header";
import EnTete from "./EnTete";
import file from "../docs/CVGuillaumeQueste.pdf";
import Helmet from "./Helmet";

class About_Me extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"About Me Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/about_me"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="detailsPresentation">
            <div className="container">
              <div className="photoMarine">
                <img
                  src={require("../img/paris.jpg")}
                  alt="photoMarine"
                  className="imgPhotoMarine"
                ></img>
              </div>
              <div className="description">
                <div className="texteDescription">
                  <p className="titreDescription">Salut,</p>
                  <p>
                    Moi c'est Marine, j'ai 33 ans. Je suis une jeune femme
                    pleine de vie, dynamique et créative.
                  </p>
                  <p>
                    Après 7 ans en tant que chef de projet packaging, j'ai
                    décidé de me reconvertir dans deux domaines qui me
                    passionnent : l'évènementiel et la communication. Le
                    changement, les défis et l'aventure ne me font pas peur. Je
                    souhaiterais rejoindre une nouvelle équipe au sein de
                    laquelle je saurai être force de proposition et où je
                    m'investirai à fond !
                  </p>
                  <p>
                    Comme le dit si bien Paul Morand "Le plus beau voyage, c'est
                    celui qu'on fait l'un vers l'autre."
                  </p>
                  <p><b>Alors voyageon ensemble !</b></p>
                </div>
              </div>
            </div>
            <div className="liens">
              <div className="adresse">
                <div className="detailsAdresse">
                  <p className="pAdresse">458 Chemin des Meuniers</p>
                  <p className="pAdresse">THIBERMONT</p>
                  <p className="pAdresse">76370 MARTIN-EGLISE</p>
                  <p className="pAdresse">Tél : 06 8545678</p>
                </div>
              </div>
              <div className="comptes">
                <div className="detailsComptes">
                  <div>
                  <img
                    src={require("../img/facebook.png")}
                    alt="facebook"
                    className="facebook"
                  ></img>
                  </div>
                  <div>
                  <img
                    src={require("../img/instagram.png")}
                    alt="facebook"
                    className="instagram"
                  ></img>
                  </div>
                  <div>
                  <img
                    src={require("../img/linkedin.png")}
                    alt="facebook"
                    className="linkedin"
                  ></img>
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

export default About_Me;
