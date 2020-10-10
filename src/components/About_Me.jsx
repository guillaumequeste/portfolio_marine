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
                <p>photo</p>
              </div>
              <div className="description">
                <p>texte</p>
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
                  <img
                    src={require("../img/facebook.png")}
                    alt="facebook"
                    className="facebook"
                  ></img>
                  <img
                    src={require("../img/instagram.png")}
                    alt="facebook"
                    className="instagram"
                  ></img>
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
    );
  }
}

export default About_Me;
