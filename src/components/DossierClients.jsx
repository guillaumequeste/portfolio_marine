import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";
import { NavLink } from "react-router-dom";

class DossierClients extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Book dossiers clients Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/dossier_clients"}
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
              <div className="upDetails upDetailsDossierClients">
                <h5 className="titreCardDetailsFairepart">Dossiers Clients</h5>
              </div>
              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/dossier_client_final_bon-1.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/dossier_client_final_bon-1.jpg")}
                      alt="dossier_client_final_bon-1.jpg"
                      className="imgHorizontale"
                    ></img>
                  </a>
                </div>
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/dossier_client_final_bon-4.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/dossier_client_final_bon-4.jpg")}
                      alt="dossier_client_final_bon-4"
                      className="imgHorizontale"
                    ></img>
                  </a>
                </div>
              </div>

              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/dossier_client_final_bon-13.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/dossier_client_final_bon-13.jpg")}
                      alt="dossier_client_final_bon-13"
                      className="imgHorizontale"
                    ></img>
                  </a>
                </div>
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/dossier_client_final_bon-14.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/dossier_client_final_bon-14.jpg")}
                      alt="dossier_client_final_bon-14"
                      className="imgHorizontale"
                    ></img>
                  </a>
                </div>
              </div>

              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/dossier_client_final_bon-15.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/dossier_client_final_bon-15.jpg")}
                      alt="dossier_client_final_bon-15"
                      className="imgHorizontale"
                    ></img>
                  </a>
                </div>
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/dossier_client_final_bon-44.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/dossier_client_final_bon-44.jpg")}
                      alt="dossier_client_final_bon-44"
                      className="imgHorizontale"
                    ></img>
                  </a>
                </div>
              </div>

              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/dossier_client_final_bon-45.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/dossier_client_final_bon-45.jpg")}
                      alt="dossier_client_final_bon-45"
                      className="imgHorizontale"
                    ></img>
                  </a>
                </div>
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/dossier_client_final_bon-46.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/dossier_client_final_bon-46.jpg")}
                      alt="dossier_client_final_bon-46"
                      className="imgHorizontale"
                    ></img>
                  </a>
                </div>
              </div>

              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/dossier_client_final_bon-47.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/dossier_client_final_bon-47.jpg")}
                      alt="dossier_client_final_bon-47"
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

export default DossierClients;
