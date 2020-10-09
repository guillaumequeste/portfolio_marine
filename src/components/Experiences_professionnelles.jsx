import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Experiences_professionnelles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details1: false,
      details2: false,
      details3: false,
      details4: false,
      details5: false
    };
    this.clicDetails1Plus = this.clicDetails1Plus.bind(this);
    this.clicDetails1Moins = this.clicDetails1Moins.bind(this);
    this.clicDetails2Plus = this.clicDetails2Plus.bind(this);
    this.clicDetails2Moins = this.clicDetails2Moins.bind(this);
    this.clicDetails3Plus = this.clicDetails3Plus.bind(this);
    this.clicDetails3Moins = this.clicDetails3Moins.bind(this);
    this.clicDetails4Plus = this.clicDetails4Plus.bind(this);
    this.clicDetails4Moins = this.clicDetails4Moins.bind(this);
    this.clicDetails5Plus = this.clicDetails5Plus.bind(this);
    this.clicDetails5Moins = this.clicDetails5Moins.bind(this);
  }

  clicDetails1Plus() {
    this.setState({
      details1: true
    });
  }

  clicDetails1Moins() {
    this.setState({
      details1: false
    });
  }

  clicDetails2Plus() {
    this.setState({
      details2: true
    });
  }

  clicDetails2Moins() {
    this.setState({
      details2: false
    });
  }

  clicDetails3Plus() {
    this.setState({
      details3: true
    });
  }

  clicDetails3Moins() {
    this.setState({
      details3: false
    });
  }

  clicDetails4Plus() {
    this.setState({
      details4: true
    });
  }

  clicDetails4Moins() {
    this.setState({
      details4: false
    });
  }

  clicDetails5Plus() {
    this.setState({
      details5: true
    });
  }

  clicDetails5Moins() {
    this.setState({
      details5: false
    });
  }

  render() {
    let divDetails1 = { display: "none", textAlign: "left" };
    let buttonDetails1Plus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetails1Moins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };

    let divDetails2 = { display: "none", textAlign: "left" };
    let buttonDetails2Plus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetails2Moins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };

    let divDetails3 = { display: "none", textAlign: "left" };
    let buttonDetails3Plus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetails3Moins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };

    let divDetails4 = { display: "none", textAlign: "left" };
    let buttonDetails4Plus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetails4Moins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };

    let divDetails5 = { display: "none", textAlign: "left" };
    let buttonDetails5Plus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetails5Moins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };

    if (this.state.details1 === true) {
      divDetails1.display = "block";
      buttonDetails1Plus.display = "none";
      buttonDetails1Moins.display = "block";
    }
    if (this.state.details2 === true) {
      divDetails2.display = "block";
      buttonDetails2Plus.display = "none";
      buttonDetails2Moins.display = "block";
    }
    if (this.state.details3 === true) {
      divDetails3.display = "block";
      buttonDetails3Plus.display = "none";
      buttonDetails3Moins.display = "block";
    }
    if (this.state.details4 === true) {
      divDetails4.display = "block";
      buttonDetails4Plus.display = "none";
      buttonDetails4Moins.display = "block";
    }
    if (this.state.details5 === true) {
      divDetails5.display = "block";
      buttonDetails5Plus.display = "none";
      buttonDetails5Moins.display = "block";
    }

    return (
      <div>
        <Helmet
          title={
            "Expériences professionnelles Portfolio de Marine Queste, chef de projet"
          }
          link={"https://marinequeste.fr/experiences_professionnelles"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="detailsExp_pro">
            <div className="frise">
              <VerticalTimeline className="timeline">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="14 mai 2017 - Aujourd'hui"
                  iconStyle={{ background: "rgb(19, 31, 17)", color: "#fff" }}
                >
                  <div className="badge">
                    <div className="titres">
                      <div className="titreLong">
                        <h6 className="vertical-timeline-element-title">
                          Responsable
                        </h6>
                        <h6 className="titreLong2"> développement packaging</h6>
                      </div>
                      <p>Smurfit Kappa (63)</p>
                    </div>
                    <button
                      onClick={this.clicDetails5Plus}
                      style={buttonDetails5Plus}
                    >
                      +
                    </button>
                    <p style={divDetails5}>hello</p>
                    <button
                      onClick={this.clicDetails5Moins}
                      style={buttonDetails5Moins}
                    >
                      -
                    </button>
                  </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="mars 2014 - novembre 2018"
                  iconStyle={{ background: "rgb(19, 31, 17)", color: "#fff" }}
                >
                  <div className="badge">
                    <div className="titres">
                      <div className="titreLong">
                        <h6 className="vertical-timeline-element-title fontWeightBold">
                          Responsable
                        </h6>
                        <h6 className="titreLong2 fontWeightBold">
                          {" "}
                          développement packaging
                        </h6>
                      </div>
                      <p className="lieu">Smurfit Kappa (63)</p>
                    </div>
                    <button
                      onClick={this.clicDetails4Plus}
                      style={buttonDetails4Plus}
                    >
                      +
                    </button>
                    <ul style={divDetails4}>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Pilotage de projets</span> pour
                        de nombreux clients (Schneider Electric, Truffaut,
                        Peugeot...).
                        <br />
                        <span className="bBlack">Gestion de projet</span> du
                        brief jusqu'à la phase de production en passant par
                        leurcahier des charges et la proposition de concepts.
                      </li>
                      <li className="whiteSpaceNormal">
                        Dessins sur logiciels ARTIOS. Plans 2D et 3D.
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">
                          Analyse des cahiers des charges
                        </span>
                        , à l'écoute du client et de ses envies.
                      </li>
                      <li className="whiteSpaceNormal">
                      <span className="bBlack">
                          Management
                        </span> des apprentis et du concepteur du bureau d'études
                      </li>
                    </ul>
                    <button
                      onClick={this.clicDetails4Moins}
                      style={buttonDetails4Moins}
                    >
                      -
                    </button>
                  </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="14 mai 2017 - Aujourd'hui"
                  iconStyle={{ background: "rgb(19, 31, 17)", color: "#fff" }}
                >
                  <div className="badge">
                    <div className="titres">
                      <div className="titreLong">
                        <h6 className="vertical-timeline-element-title">
                          Responsable
                        </h6>
                        <h6 className="titreLong2"> développement packaging</h6>
                      </div>
                      <p>Smurfit Kappa (63)</p>
                    </div>
                    <button
                      onClick={this.clicDetails3Plus}
                      style={buttonDetails3Plus}
                    >
                      +
                    </button>
                    <p style={divDetails3}>hello</p>
                    <button
                      onClick={this.clicDetails3Moins}
                      style={buttonDetails3Moins}
                    >
                      -
                    </button>
                  </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="14 mai 2017 - Aujourd'hui"
                  iconStyle={{ background: "rgb(19, 31, 17)", color: "#fff" }}
                >
                  <div className="badge">
                    <div className="titres">
                      <div className="titreLong">
                        <h6 className="vertical-timeline-element-title">
                          Responsable
                        </h6>
                        <h6 className="titreLong2"> développement packaging</h6>
                      </div>
                      <p>Smurfit Kappa (63)</p>
                    </div>
                    <button
                      onClick={this.clicDetails2Plus}
                      style={buttonDetails2Plus}
                    >
                      +
                    </button>
                    <p style={divDetails2}>hello</p>
                    <button
                      onClick={this.clicDetails2Moins}
                      style={buttonDetails2Moins}
                    >
                      -
                    </button>
                  </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="14 mai 2017 - Aujourd'hui"
                  iconStyle={{ background: "rgb(19, 31, 17)", color: "#fff" }}
                >
                  <div className="badge">
                    <div className="titres">
                      <div className="titreLong">
                        <h6 className="vertical-timeline-element-title">
                          Responsable
                        </h6>
                        <h6 className="titreLong2"> développement packaging</h6>
                      </div>
                      <p>Smurfit Kappa (63)</p>
                    </div>
                    <button
                      onClick={this.clicDetails1Plus}
                      style={buttonDetails1Plus}
                    >
                      +
                    </button>
                    <p style={divDetails1}>hello</p>
                    <button
                      onClick={this.clicDetails1Moins}
                      style={buttonDetails1Moins}
                    >
                      -
                    </button>
                  </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: "rgb(0, 111, 83)", color: "#fff" }}
                ></VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences_professionnelles;
