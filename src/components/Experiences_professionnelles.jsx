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

      details6: false
    };
    this.clicDetails1Plus = this.clicDetails1Plus.bind(this);
    this.clicDetails1Moins = this.clicDetails1Moins.bind(this);
    this.clicDetails2Plus = this.clicDetails2Plus.bind(this);
    this.clicDetails2Moins = this.clicDetails2Moins.bind(this);
    this.clicDetails3Plus = this.clicDetails3Plus.bind(this);
    this.clicDetails3Moins = this.clicDetails3Moins.bind(this);
    this.clicDetails4Plus = this.clicDetails4Plus.bind(this);
    this.clicDetails4Moins = this.clicDetails4Moins.bind(this);

    this.clicDetails6Plus = this.clicDetails6Plus.bind(this);
    this.clicDetails6Moins = this.clicDetails6Moins.bind(this);
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

  clicDetails6Plus() {
    this.setState({
      details6: true
    });
  }

  clicDetails6Moins() {
    this.setState({
      details6: false
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

    let divDetails6 = { display: "none", textAlign: "left" };
    let buttonDetails6Plus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetails6Moins = {
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

    if (this.state.details6 === true) {
      divDetails6.display = "block";
      buttonDetails6Plus.display = "none";
      buttonDetails6Moins.display = "block";
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
                  date="mars 2014 - novembre 2018"
                  iconStyle={{ background: "rgb(224, 170, 25)", color: "#fff" }}
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
                        <span className="bBlack">Management</span> des apprentis
                        et du concepteur du bureau d'études.
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Orientation clients</span> sur
                        le choix des différentes propositions de concepts.
                        Présentation PowerPoint avec prototypes devant le
                        client.
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Création de graphismes</span> à
                        apposer sur les packagings.
                      </li>
                      <li className="whiteSpaceNormal">
                        Les deadlines, les changements de production entraînent
                        une <span className="bBlack">adaptabilité</span> et une{" "}
                        <span className="bBlack">flexibilité</span>.
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">
                          Organisation d'évènements
                        </span>{" "}
                        :
                        <ul>
                          <li>
                            Journées portes ouvertes (invitations, location de
                            matériel, accueil le jour J, animations
                            d'ateliers...)
                          </li>
                          <li>
                            40 ans de l'entreprise (affiches, invitations, frise
                            chronologique géante, cadeaux clients...)
                          </li>
                          <li>
                            Remise de médailles (préparation de la salle,
                            création de décor, location de matériel...)
                          </li>
                          <li>
                            Fêtes de Noël (réservation du restaurant, affiches,
                            cartons d'invitation, lancement de concours, organisation de la
                            soirée...)
                          </li>
                        </ul>
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
                  date="septembre 2011 - mars 2014"
                  iconStyle={{ background: "rgb(124, 86, 1)", color: "#fff" }}
                >
                  <div className="badge">
                    <div className="titres">
                      <div className="titreLong">
                        <h6 className="vertical-timeline-element-title fontWeightBold">
                          Apprentie technicienne
                        </h6>
                        <h6 className="titreLong2 fontWeightBold">
                          {" "}
                          bureau d'études
                        </h6>
                      </div>
                      <p className="lieu">Smurfit Kappa (34)</p>
                    </div>
                    <button
                      onClick={this.clicDetails3Plus}
                      style={buttonDetails3Plus}
                    >
                      +
                    </button>
                    <ul style={divDetails3}>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Pilotage de projets</span> pour
                        de nombreux clients (Haribo, McCormick, Nestlé
                        Watters...).
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">
                          Dessins assistés par ordinateur
                        </span>{" "}
                        (Artios Cad).
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Prototypages</span>
                        sur tables de découpe.
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Création</span> de nouveaux
                        emballages.
                      </li>
                    </ul>
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
                  date="septembre 2010 - septembre 2011"
                  iconStyle={{ background: "rgb(241, 107, 36)", color: "#fff" }}
                >
                  <div className="badge">
                    <div className="titres">
                      <div className="titreLong">
                        <h6 className="vertical-timeline-element-title fontWeightBold">
                          Apprentie technicienne
                        </h6>
                        <h6 className="titreLong2 fontWeightBold">
                          {" "}
                          bureau d'études
                        </h6>
                      </div>
                      <p className="lieu">
                        Massmould (Bedford, UK)
                      </p>
                    </div>
                    <button
                      onClick={this.clicDetails2Plus}
                      style={buttonDetails2Plus}
                    >
                      +
                    </button>
                    <ul style={divDetails2}>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">
                          Rédaction de process machines
                        </span>{" "}
                        pour des machines d'injection plastique.
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Contrôles qualité</span> de
                        pièces injectées.
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Dessin sur logiciel 3D</span>.
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Tests</span> de nouveaux
                        produits{" "}
                        <span className="bBlack">sur ligne de production</span>.
                      </li>
                      <li className="whiteSpaceNormal">
                        Pilotage de la machine.
                      </li>
                    </ul>
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
                  date="septembre 2009 - septembre 2010"
                  iconStyle={{
                    background: "rgb(250, 213, 207)",
                    color: "#fff"
                  }}
                >
                  <div className="badge">
                    <div className="titres">
                      <div className="titreLong">
                        <h6 className="vertical-timeline-element-title fontWeightBold">
                          Apprentie qualité -
                        </h6>
                        <h6 className="titreLong2 fontWeightBold"> process</h6>
                      </div>
                      <p className="lieu">Nestlé (76)</p>
                    </div>
                    <button
                      onClick={this.clicDetails1Plus}
                      style={buttonDetails1Plus}
                    >
                      +
                    </button>
                    <ul style={divDetails1}>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Contrôle qualité</span> des
                        produits de production (capsules, pots en verre,
                        operculage...).
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">
                          Essais sur ligne de production
                        </span>{" "}
                        pour la mise en place d'un nouveau produit (tests
                        operculage, détection de métaux, passages sur
                        machine...).
                      </li>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Management</span> d'une équipe
                        de CAT mise à disposition pour les tests du nouveau
                        produit.
                      </li>
                    </ul>
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
                  date="vacances d'été, Noël, Pâques de 2005 à 2009"
                  iconStyle={{
                    background: "rgb(2, 62, 24)",
                    color: "#fff"
                  }}
                >
                  <div className="badge">
                    <div className="titres">
                      <div className="titreLong">
                        <h6 className="vertical-timeline-element-title fontWeightBold">
                          Employée polyvalente
                        </h6>
                      </div>
                      <p className="lieu">Auchan (76)</p>
                    </div>
                    <button
                      onClick={this.clicDetails6Plus}
                      style={buttonDetails6Plus}
                    >
                      +
                    </button>
                    <ul style={divDetails6}>
                      <li className="whiteSpaceNormal">
                        <span className="bBlack">Manutention</span> :
                        remplissage de différents rayons,{" "}
                        <span className="bBlack">organisation du stock</span>,
                        étiquetage en magasin...
                      </li>
                      <li className="whiteSpaceNormal">
                        Renseigner les clients.
                      </li>
                    </ul>
                    <button
                      onClick={this.clicDetails6Moins}
                      style={buttonDetails6Moins}
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
