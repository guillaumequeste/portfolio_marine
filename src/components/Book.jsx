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

    let divDetailsFairePart = { display: "none", textAlign: "left" };
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

    let divDetailsAffiche = { display: "none", textAlign: "left" };
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

    let divDetailsDossierClients = { display: "none", textAlign: "left" };
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

    let divDetailsAutre = { display: "none", textAlign: "left" };
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
      buttonDetailsCarteDeVisitePlus.display = "none";
      buttonDetailsCarteDeVisiteMoins.display = "block";
      fairePart.display = "none";
      affiche.display = "none";
      dossierClients.display = "none";
      autre.display = "none";
      carteDeVisite.minWidth = "100%";
      detailsBook.height = "110vh";
    }
    if (this.state.detailsFairePart === true) {
      divDetailsFairePart.display = "block";
      detailsFairePart.display = "block";
      buttonDetailsFairePartPlus.display = "none";
      buttonDetailsFairePartMoins.display = "block";
      carteDeVisite.display = "none";
      affiche.display = "none";
      dossierClients.display = "none";
      autre.display = "none";
    }
    if (this.state.detailsAffiche === true) {
      divDetailsAffiche.display = "block";
      detailsAffiche.display = "block";
      buttonDetailsAffichePlus.display = "none";
      buttonDetailsAfficheMoins.display = "block";
      carteDeVisite.display = "none";
      fairePart.display = "none";
      dossierClients.display = "none";
      autre.display = "none";
    }
    if (this.state.detailsDossierClients === true) {
      divDetailsDossierClients.display = "block";
      detailsDossierClients.display = "block";
      buttonDetailsDossierClientsPlus.display = "none";
      buttonDetailsDossierClientsMoins.display = "block";
      carteDeVisite.display = "none";
      fairePart.display = "none";
      affiche.display = "none";
      autre.display = "none";
    }
    if (this.state.detailsAutre === true) {
      divDetailsAutre.display = "block";
      detailsAutre.display = "block";
      buttonDetailsAutrePlus.display = "none";
      buttonDetailsAutreMoins.display = "block";
      carteDeVisite.display = "none";
      fairePart.display = "none";
      affiche.display = "none";
      dossierClients.display = "none";
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
            <div class="container">
              <div class="row">
                {/* card carte de visite */}
                <div
                  class="col-md-4 col-sm-6 col-12 divCarte"
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
                    <div className="up">carte de visite</div>
                    <div className="down">
                      <div style={detailsCarteDeVisite}>
                        <div className="row">
                          <div className="col-12 col-sm-6 divImg">
                            <a
                              href={require("../img/carte_de_visite_guillaume.jpg")}
                              without
                              rel="noopener noreferrer"
                              target="_blank"
                              className="aImgHorizontale"
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
                              without rel="noopener noreferrer" target="_blank"
                              className="aImgHorizontale" >
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
                  class="col-md-4 col-sm-6 col-12 divCarte"
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
                        </div>
                      </div>
                    </div>
                    <div className="up">faire part</div>
                    <div className="down">
                      <p style={divDetailsFairePart}>details faire-part</p>
                      <div style={detailsFairePart}>
                        <ul>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                        </ul>
                      </div>
                      <button
                        onClick={this.clicDetailsFairePartMoins}
                        style={buttonDetailsFairePartMoins}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>

                {/* card affiche */}
                <div class="col-md-4 col-sm-6 col-12 divCarte" style={affiche}>
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
                        </div>
                      </div>
                    </div>
                    <div className="up">affiche</div>
                    <div className="down">
                      <p style={divDetailsAffiche}>détails affiche</p>
                      <div style={detailsAffiche}>
                        <ul>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                        </ul>
                      </div>
                      <button
                        onClick={this.clicDetailsAfficheMoins}
                        style={buttonDetailsAfficheMoins}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>

                {/* card dossiers cliants */}
                <div
                  class="col-md-4 col-sm-6 col-12 divCarte"
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
                        </div>
                      </div>
                    </div>
                    <div className="up">dossier clients</div>
                    <div className="down">
                      <p style={divDetailsDossierClients}>
                        détails dossier clients
                      </p>
                      <div style={detailsDossierClients}>
                        <ul>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                        </ul>
                      </div>
                      <button
                        onClick={this.clicDetailsDossierClientsMoins}
                        style={buttonDetailsDossierClientsMoins}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>

                {/* card autre */}
                <div class="col-md-4 col-sm-6 col-12 divCarte" style={autre}>
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
                        </div>
                      </div>
                    </div>
                    <div className="up">autre</div>
                    <div className="down">
                      <p style={divDetailsAutre}>détails autre</p>
                      <div style={detailsAutre}>
                        <ul>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                          <li>eerv</li>
                        </ul>
                      </div>
                      <button
                        onClick={this.clicDetailsAutreMoins}
                        style={buttonDetailsAutreMoins}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 col-12 divCarte sixieme">
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
