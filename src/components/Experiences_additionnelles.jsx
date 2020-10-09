import React, { Component } from "react"
import Header from "./Header"
import Helmet from "./Helmet"
import EnTete from "./EnTete";

class Experiences_additionnelles extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Expériences additionnelles Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/experiences_additionnelles"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="detailsExp_add">
            <p>expériences additionnelles</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences_additionnelles;
