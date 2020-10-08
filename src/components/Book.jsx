import React, { Component } from "react"
import Header from "./Header"
import Helmet from "./Helmet"
import En_tete from "./En_tete";

class Book extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Book Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/book"}
        />
        <Header />
        <div className="bodyPage">
          <En_tete />
          <div className="detailsBook">
            <p>book</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
