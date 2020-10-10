import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";

class Competences extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Competences Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/competences"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="detailsCompetences">
            <div className="bloc">
              <div className="sous-bloc">
                <h3 className="titreDomaine">Pack Adobe</h3>
                <ul>
                  <li className="liSousBloc">
                    <span className="spanStar">
                      <img
                        src={require("../img/photoshop.png")}
                        alt="star"
                        className="logo"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBloc">
                    <span className="spanStar">
                      <img
                        src={require("../img/in_design.png")}
                        alt="star"
                        className="logo"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBloc">
                    <span className="spanStar">
                      <img
                        src={require("../img/illustrator.png")}
                        alt="star"
                        className="logo"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="sous-bloc">
                <h3 className="titreDomaine">Pack Office</h3>
                <ul>
                  <li className="liSousBloc">
                    <img
                      src={require("../img/word.png")}
                      alt="star"
                      className="logoOffice"
                    ></img>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBloc">
                    <img
                      src={require("../img/powerpoint.png")}
                      alt="star"
                      className="logoOffice"
                    ></img>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBloc">
                    <img
                      src={require("../img/powerpoint.png")}
                      alt="star"
                      className="logoOffice"
                    ></img>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bloc">
              <div className="sous-bloc">
                <h3 className="titreDomaine">Logiciels de montage</h3>
                <ul>
                  <li className="liSousBloc">
                  <img
                      src={require("../img/pinnacle.png")}
                      alt="star"
                      className="logoMontage"
                    ></img>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBloc">
                  <img
                      src={require("../img/photobookshop.png")}
                      alt="star"
                      className="logoMontage"
                    ></img>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBloc">
                  <img
                      src={require("../img/filmora.png")}
                      alt="star"
                      className="logoMontage"
                    ></img>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="sous-bloc">
                <h3 className="titreDomaine">Logiciels de dessin</h3>
                <ul>
                  <li className="liSousBloc">
                  <img
                      src={require("../img/artioscad.png")}
                      alt="star"
                      className="logoMontage"
                    ></img>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBloc">
                  <img
                      src={require("../img/rhinoceros.png")}
                      alt="star"
                      className="logoMontage"
                    ></img>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBloc">
                  <img
                      src={require("../img/cape.png")}
                      alt="star"
                      className="logoMontage"
                    ></img>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star_empty.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bloc">
              <div className="sous-blocAutres">
                <h3 className="titreDomaine">Savoirs et savoir-faire</h3>
                <ul>
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Gestion de projet</h6>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Id</h6>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Ni</h6>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="sous-blocAutres">
                <h3 className="titreDomaine">Autres</h3>
                <ul>
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Ps</h6>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Id</h6>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Ni</h6>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                    <span className="spanStar">
                      <img
                        src={require("../img/star.png")}
                        alt="star"
                        className="star jaune"
                      ></img>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Competences;
