import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"NotFound Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/notfound"}
        />
        <Header />
        <div className="bodyContact">
          <p>error not found</p>
        </div>
      </div>
    );
  }
}

export default NotFound;
