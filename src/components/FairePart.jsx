import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";
import { NavLink } from "react-router-dom";

class FairePart extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Book faireparts Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/faire_part"}
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
              <div className="upDetails upDetailsFairepart">
                <h5 className="titreCardDetailsFairepart">Faireparts</h5>
              </div>

              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/faire_part_bon-1.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/faire_part_bon-1.jpg")}
                      alt="faire_part_bon-1.jpg"
                      className="imgVerticale"
                    ></img>
                  </a>
                </div>
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/faire_part_bon-2.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/faire_part_bon-2.jpg")}
                      alt="faire_part_bon-2"
                      className="imgVerticale"
                    ></img>
                  </a>
                </div>
              </div>

              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/faire_part_bon-3.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/faire_part_bon-3.jpg")}
                      alt="faire_part_bon-3"
                      className="imgVerticale"
                    ></img>
                  </a>
                </div>
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/faire_part_bon-4.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/faire_part_bon-4.jpg")}
                      alt="faire_part_bon-4.jpg"
                      className="imgVerticale"
                    ></img>
                  </a>
                </div>
              </div>

              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/remerciements.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/remerciements.jpg")}
                      alt="remerciements"
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

export default FairePart;
