import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/notfound"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="bodyNotFound">
            <div className="messageNotFound">
              <div>
                <img
                  src={require("../img/worst.gif")}
                  alt="gif"
                  className="gif"
                ></img>
              </div>
              <Link to="/" className="retourAccueil">
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
