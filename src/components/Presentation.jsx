import React, { Component } from "react";
import Header from "./Header";
import EnTete from "./EnTete";
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
          <EnTete />
          <div className="detailsPresentation">
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
