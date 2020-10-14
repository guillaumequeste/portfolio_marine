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
                <h5 className="titreDomaine">Pack Adobe</h5>
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
                <h5 className="titreDomaine">Pack Office</h5>
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
                <h5 className="titreDomaine">Logiciels de montage</h5>
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
                <h5 className="titreDomaine">Logiciels de dessin</h5>
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
                <h5 className="titreDomaine">Savoirs et savoir-faire</h5>
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
                    <h6 className="domaineAutres">Eco-conception</h6>
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
                    <h6 className="domaineAutres">Management</h6>
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
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Conseil client</h6>
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
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Coordonner prestataires, fournisseurs...</h6>
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
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Graphisme</h6>
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
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Organisation documents</h6>
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
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Communication visuelle</h6>
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
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Création de visuels</h6>
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
                </ul>
              </div>
              <div className="sous-blocAutres">
                <h5 className="titreDomaine">Savoir-être</h5>
                <ul>
                <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Sens de l'organisation</h6>
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
                    <h6 className="domaineAutres">Rigueur</h6>
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
                    <h6 className="domaineAutres">Dynamisme</h6>
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
                    <h6 className="domaineAutres">Travail en équipe</h6>
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
                    <h6 className="domaineAutres">Création</h6>
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
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Autonomie</h6>
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
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Réactivité</h6>
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
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Capacité d'adaptation</h6>
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
                  <li className="liSousBlocAutres">
                    <h6 className="domaineAutres">Gestion du stress</h6>
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
