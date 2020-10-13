import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";
import { NavLink } from "react-router-dom";

class Autre extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Book autres Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/autre"}
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
                <h5 className="titreCardDetails">Autres</h5>
              </div>
              <div className="downDetails">
                <div className="divImgHorizontale">
                  <a
                    href={require("../img/ticket_dore.jpg")}
                    without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="aImg"
                  >
                    <img
                      src={require("../img/ticket_dore.jpg")}
                      alt="ticket_dore"
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

export default Autre;
