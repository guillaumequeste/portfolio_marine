import React, { Component } from "react"
import Header from "./Header"
import Helmet from "./Helmet"

class Book extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Book Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/book"}
        />
        <Header />
        <div className="bodyContact">
          <p>book</p>
        </div>
      </div>
    );
  }
}

export default Book;
