import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";

class Centres_d_interets extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Centres d'intérêts Portfolio de Marine Queste, chef de projet"
          }
          link={"https://marinequeste.fr/centres_d_interets"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="bodyCentresDInterets">
            <div className="row justify-content-md-center">
              <div className="col-12 col-sm-6 col-md-4 centre">
                <div className="divHexagone">
                  <div class="hexagone">
                    <div class="hexagonemain">
                      <div class="hexagonemainbefore danse"></div>
                    </div>
                  </div>
                  <p className="titreCentre">Danse</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 centre">
                <div className="divHexagone">
                  <div class="hexagone">
                    <div class="hexagonemain">
                      <div class="hexagonemainbefore montage"></div>
                    </div>
                  </div>
                  <p className="titreCentre">Montage vidéo</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 centre">
                <div className="divHexagone">
                  <div class="hexagone">
                    <div class="hexagonemain">
                      <div class="hexagonemainbefore voyages"></div>
                    </div>
                  </div>
                  <p className="titreCentre">Voyages</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 centre">
                <div className="divHexagone">
                  <div class="hexagone">
                    <div class="hexagonemain">
                      <div class="hexagonemainbefore musique"></div>
                    </div>
                  </div>
                  <p className="titreCentre">Musique</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 centre">
                <div className="divHexagone">
                  <div class="hexagone">
                    <div class="hexagonemain">
                      <div class="hexagonemainbefore bullet"></div>
                    </div>
                  </div>
                  <p className="titreCentre">Bullet journal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Centres_d_interets;
