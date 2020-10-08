import React, { Component } from "react"
import Header from "./Header"
import Helmet from "./Helmet"

class Centres_d_interets extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Centres d'intérêts Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/centres_d_interets"}
        />
        <Header />
        <div className="bodyContact">
          <p>centres d'intérêts</p>
        </div>
      </div>
    );
  }
}

export default Centres_d_interets;
