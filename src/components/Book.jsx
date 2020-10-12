import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsCarteDeVisite: false,
      detailsAffiche: false,
      detailsFairePart: false,
      detailsDossierClients: false,
      detailsAutre: false
    };
    this.clicDetailsCarteDeVisitePlus = this.clicDetailsCarteDeVisitePlus.bind(
      this
    );
    this.clicDetailsCarteDeVisiteMoins = this.clicDetailsCarteDeVisiteMoins.bind(
      this
    );
    this.clicDetailsAffichePlus = this.clicDetailsAffichePlus.bind(this);
    this.clicDetailsAfficheMoins = this.clicDetailsAfficheMoins.bind(this);
    this.clicDetailsFairePartPlus = this.clicDetailsFairePartPlus.bind(this);
    this.clicDetailsFairePartMoins = this.clicDetailsFairePartMoins.bind(this);
    this.clicDetailsDossierClientsPlus = this.clicDetailsDossierClientsPlus.bind(
      this
    );
    this.clicDetailsDossierClientsMoins = this.clicDetailsDossierClientsMoins.bind(
      this
    );
    this.clicDetailsAutrePlus = this.clicDetailsAutrePlus.bind(this);
    this.clicDetailsAutreMoins = this.clicDetailsAutreMoins.bind(this);
  }

  clicDetailsCarteDeVisitePlus() {
    this.setState({
      detailsCarteDeVisite: true
    });
  }

  clicDetailsCarteDeVisiteMoins() {
    this.setState({
      detailsCarteDeVisite: false
    });
  }

  clicDetailsFairePartPlus() {
    this.setState({
      detailsFairePart: true
    });
  }

  clicDetailsFairePartMoins() {
    this.setState({
      detailsFairePart: false
    });
  }

  clicDetailsAffichePlus() {
    this.setState({
      detailsAffiche: true
    });
  }

  clicDetailsAfficheMoins() {
    this.setState({
      detailsAffiche: false
    });
  }

  clicDetailsDossierClientsPlus() {
    this.setState({
      detailsDossierClients: true
    });
  }

  clicDetailsDossierClientsMoins() {
    this.setState({
      detailsDossierClients: false
    });
  }

  clicDetailsAutrePlus() {
    this.setState({
      detailsAutre: true
    });
  }

  clicDetailsAutreMoins() {
    this.setState({
      detailsAutre: false
    });
  }

  render() {
    let detailsBook = { minHeight: "81vh" };
    let titreCard = { paddingTop: "25%", textAlign: "center", fontWeight: "bold" };

    let detailsCarteDeVisite = { display: "none" };
    let buttonDetailsCarteDeVisitePlus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetailsCarteDeVisiteMoins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let carteDeVisite = { display: "block" };

    let detailsFairePart = { display: "none" };
    let buttonDetailsFairePartPlus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetailsFairePartMoins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let fairePart = { display: "block" };

    let detailsAffiche = { display: "none" };
    let buttonDetailsAffichePlus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetailsAfficheMoins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let affiche = { display: "block" };

    let detailsDossierClients = { display: "none" };
    let buttonDetailsDossierClientsPlus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetailsDossierClientsMoins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let dossierClients = { display: "block" };

    let detailsAutre = { display: "none" };
    let buttonDetailsAutrePlus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetailsAutreMoins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let autre = { display: "block" };

    if (this.state.detailsCarteDeVisite === true) {
      detailsCarteDeVisite.display = "block";
      detailsCarteDeVisite.boxShadow = "10px 5px 5px black";
      buttonDetailsCarteDeVisitePlus.display = "none";
      buttonDetailsCarteDeVisiteMoins.display = "block";
      titreCard.paddingTop = "70px";
      fairePart.display = "none";
      affiche.display = "none";
      dossierClients.display = "none";
      autre.display = "none";
      carteDeVisite.minWidth = "100%";
      detailsBook.height = "125vh";
    }
    if (this.state.detailsFairePart === true) {
      detailsFairePart.display = "block";
      detailsFairePart.boxShadow = "10px 5px 5px black";
      buttonDetailsFairePartPlus.display = "none";
      buttonDetailsFairePartMoins.display = "block";
      titreCard.paddingTop = "70px";
      carteDeVisite.display = "none";
      affiche.display = "none";
      dossierClients.display = "none";
      autre.display = "none";
      fairePart.minWidth = "100%";
      detailsBook.height = "360vh";
    }
    if (this.state.detailsAffiche === true) {
      detailsAffiche.display = "block";
      detailsAffiche.boxShadow = "10px 5px 5px black";
      buttonDetailsAffichePlus.display = "none";
      buttonDetailsAfficheMoins.display = "block";
      titreCard.paddingTop = "70px";
      carteDeVisite.display = "none";
      fairePart.display = "none";
      dossierClients.display = "none";
      autre.display = "none";
      affiche.minWidth = "100%";
      detailsBook.height = "190vh";
    }
    if (this.state.detailsDossierClients === true) {
      detailsDossierClients.display = "block";
      detailsDossierClients.boxShadow = "10px 5px 5px black";
      buttonDetailsDossierClientsPlus.display = "none";
      buttonDetailsDossierClientsMoins.display = "block";
      titreCard.paddingTop = "70px";
      carteDeVisite.display = "none";
      fairePart.display = "none";
      affiche.display = "none";
      autre.display = "none";
      dossierClients.minWidth = "100%";
      detailsBook.height = "540vh";
    }
    if (this.state.detailsAutre === true) {
      detailsAutre.display = "block";
      detailsAutre.boxShadow = "10px 5px 5px black";
      buttonDetailsAutrePlus.display = "none";
      buttonDetailsAutreMoins.display = "block";
      titreCard.paddingTop = "70px";
      carteDeVisite.display = "none";
      fairePart.display = "none";
      affiche.display = "none";
      dossierClients.display = "none";
      autre.minWidth = "100%";
      detailsBook.height = "95vh";
    }

    return (
      <div>
        <Helmet
          title={"Book Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/book"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="detailsBook" style={detailsBook}>
            <div className="container">
              <div className="row">
                {/* card carte de visite */}
                <div
                  className="col-md-4 col-sm-6 col-12 divCarte"
                  style={carteDeVisite}
                >
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">
                          <button
                            onClick={this.clicDetailsCarteDeVisitePlus}
                            style={buttonDetailsCarteDeVisitePlus}
                          >
                            +
                          </button>
                          <button
                            onClick={this.clicDetailsCarteDeVisiteMoins}
                            style={buttonDetailsCarteDeVisiteMoins}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="upCarteDeVisite"></div>
                    <div className="down">
                      <h6 style={titreCard}>Cartes de visite</h6>
                      <div style={detailsCarteDeVisite}>
                        <div className="row">
                          <div className="col-12 col-sm-6 divImg">
                            <a
                              href={require("../img/carte_de_visite_guillaume.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/carte_de_visite_guillaume.jpg")}
                                alt="carte_de_visite_guillaume"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-6 divImg">
                            <a
                              href={require("../img/logo.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/logo.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* card faire-part */}
                <div
                  className="col-md-4 col-sm-6 col-12 divCarte"
                  style={fairePart}
                >
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">
                          <button
                            onClick={this.clicDetailsFairePartPlus}
                            style={buttonDetailsFairePartPlus}
                          >
                            +
                          </button>
                          <button
                            onClick={this.clicDetailsFairePartMoins}
                            style={buttonDetailsFairePartMoins}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="upFairePart"></div>
                    <div className="down">
                    <h6 style={titreCard}>Faireparts</h6>
                      <div style={detailsFairePart}>
                        <div className="row">
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/faire_part_bon-1.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/faire_part_bon-1.jpg")}
                                alt="carte_de_visite_guillaume"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/faire_part_bon-2.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/faire_part_bon-2.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/faire_part_bon-3.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/faire_part_bon-3.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/faire_part_bon-4.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/faire_part_bon-4.jpg")}
                                alt="logo"
                                className="imgVerticale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/remerciements.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/remerciements.jpg")}
                                alt="logo"
                                className="imgVerticale"
                              ></img>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* card affiche */}
                <div className="col-md-4 col-sm-6 col-12 divCarte" style={affiche}>
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">
                          <button
                            onClick={this.clicDetailsAffichePlus}
                            style={buttonDetailsAffichePlus}
                          >
                            +
                          </button>
                          <button
                            onClick={this.clicDetailsAfficheMoins}
                            style={buttonDetailsAfficheMoins}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="upAffiche"></div>
                    <div className="down">
                    <h6 style={titreCard}>Affiches</h6>
                      <div style={detailsAffiche}>
                        <div className="row">
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/affiche_dore.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/affiche_dore.jpg")}
                                alt="carte_de_visite_guillaume"
                                className="imgVerticale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/affiche_jazz.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/affiche_jazz.jpg")}
                                alt="logo"
                                className="imgVerticale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/affiche_soiree_chic_choc.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/affiche_soiree_chic_choc.jpg")}
                                alt="logo"
                                className="imgVerticale"
                              ></img>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* card dossiers clients */}
                <div
                  className="col-md-4 col-sm-6 col-12 divCarte"
                  style={dossierClients}
                >
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">
                          <button
                            onClick={this.clicDetailsDossierClientsPlus}
                            style={buttonDetailsDossierClientsPlus}
                          >
                            +
                          </button>
                          <button
                            onClick={this.clicDetailsDossierClientsMoins}
                            style={buttonDetailsDossierClientsMoins}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="upDossierClients"></div>
                    <div className="down">
                    <h6 style={titreCard}>Dossiers clients</h6>
                      <div style={detailsDossierClients}>
                        <div className="row">
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/dossier_client_final_bon-1.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/dossier_client_final_bon-1.jpg")}
                                alt="carte_de_visite_guillaume"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/dossier_client_final_bon-4.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/dossier_client_final_bon-4.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/dossier_client_final_bon-13.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/dossier_client_final_bon-13.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>

                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/dossier_client_final_bon-14.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/dossier_client_final_bon-14.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/dossier_client_final_bon-15.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/dossier_client_final_bon-15.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/dossier_client_final_bon-44.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/dossier_client_final_bon-44.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/dossier_client_final_bon-45.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/dossier_client_final_bon-45.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/dossier_client_final_bon-46.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/dossier_client_final_bon-46.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                          <div className="col-12 col-sm-4 divImg">
                            <a
                              href={require("../img/dossier_client_final_bon-47.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/dossier_client_final_bon-47.jpg")}
                                alt="logo"
                                className="imgHorizontale"
                              ></img>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* card autre */}
                <div className="col-md-4 col-sm-6 col-12 divCarte" style={autre}>
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">
                          <button
                            onClick={this.clicDetailsAutrePlus}
                            style={buttonDetailsAutrePlus}
                          >
                            +
                          </button>
                          <button
                            onClick={this.clicDetailsAutreMoins}
                            style={buttonDetailsAutreMoins}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="upAutre"></div>
                    <div className="down">
                    <h6 style={titreCard}>Autres</h6>
                      <div style={detailsAutre}>
                        <div className="row">
                          <div className="col-12 divImg">
                            <a
                              href={require("../img/ticket_dore.jpg")}
                              without="true"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImg"
                            >
                              <img
                                src={require("../img/ticket_dore.jpg")}
                                alt="carte_de_visite_guillaume"
                                className="imgVerticale"
                              ></img>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 divCarte sixieme">
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">six</div>
                      </div>
                    </div>
                    <div className="up">up</div>
                    <div className="down">down</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
