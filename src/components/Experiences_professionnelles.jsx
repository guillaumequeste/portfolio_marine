import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import En_tete from "./En_tete";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Experiences_professionnelles extends Component {
  render() {
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
          <En_tete />
          <div className="detailsExp_pro">
            <div className="frise">
              <VerticalTimeline className="timeline">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="14 mai 2017 - Aujourd'hui"
                  iconStyle={{ background: "rgb(224, 170, 25)", color: "#fff" }}
                >
                  <div className="badge">
                    <div className="titres">
                      <h6 className="vertical-timeline-element-title">
                        1ère expérience
                      </h6>
                      <p>Chef de projet</p>
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
                      <h6 className="vertical-timeline-element-title">
                        2ème expérience
                      </h6>
                      <p>Chef marketing</p>
                    </div>
                  </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="14 mai 2017 - Aujourd'hui"
                  iconStyle={{ background: "rgb(241, 107, 36)", color: "#fff" }}
                >
                  <div className="badge">
                    <div className="titres">
                      <h6 className="vertical-timeline-element-title">
                        3ème expérience
                      </h6>
                      <p>Chef</p>
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
                  iconStyle={{ background: "rgb(250, 213, 207)", color: "#fff" }}
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
                >
                </VerticalTimelineElement>
                
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences_professionnelles;
