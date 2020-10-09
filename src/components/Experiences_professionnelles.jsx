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
      details3: false
    };
    this.clicDetails1Plus = this.clicDetails1Plus.bind(this);
    this.clicDetails1Moins = this.clicDetails1Moins.bind(this);
    this.clicDetails2Plus = this.clicDetails2Plus.bind(this);
    this.clicDetails2Moins = this.clicDetails2Moins.bind(this);
    this.clicDetails3Plus = this.clicDetails3Plus.bind(this);
    this.clicDetails3Moins = this.clicDetails3Moins.bind(this);
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

  render() {
    let divDetails1 = { display: "none", "textAlign": "left" };
    let buttonDetails1Plus = { display: "block" };
    let buttonDetails1Moins = { display: "none" };

    let divDetails2 = { display: "none", "textAlign": "left" };
    let buttonDetails2Plus = { display: "block" };
    let buttonDetails2Moins = { display: "none" };

    let divDetails3 = { display: "none", "textAlign": "left" };
    let buttonDetails3Plus = { display: "block" };
    let buttonDetails3Moins = { display: "none" };

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
                  </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="14 mai 2017 - Aujourd'hui"
                  iconStyle={{ background: "rgb(124, 86, 1)", color: "#fff" }}
                >
                  <div className="badge">
                    <div className="titres">
                      <h6 className="vertical-timeline-element-title">
                        4ème expérience
                      </h6>
                      <p>Chef chef</p>
                    </div>
                  </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="14 mai 2017 - Aujourd'hui"
                  iconStyle={{
                    background: "rgb(250, 213, 207)",
                    color: "#fff"
                  }}
                >
                  <div className="badge">
                    <div className="titres">
                      <h6 className="vertical-timeline-element-title">
                        5ème expérience
                      </h6>
                      <p>Chef chef chef</p>
                    </div>
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
