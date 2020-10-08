import React, { Component } from "react";
import Header from "./Header";
import En_tete from "./En_tete";
import file from "../docs/CVGuillaumeQueste.pdf";
import Helmet from "./Helmet";

class Presentation extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"About Me Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/about_me"}
        />
        <Header />
        <div className="bodyPage">
          <En_tete />
          <div className="details">
            <p>presentation portfolio Marine</p>
            <a href={file} without rel="noopener noreferrer" target="_blank">
              <button trailingIcon="picture_as_pdf" label="Resume">
                PDF
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
