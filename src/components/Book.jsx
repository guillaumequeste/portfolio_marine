import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import EnTete from "./EnTete";

class Book extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Book Portfolio de Marine Queste, chef de projet"}
          link={"https://marinequeste.fr/book"}
        />
        <Header />
        <div className="bodyPage">
          <EnTete />
          <div className="detailsBook">
            <div class="container">
              <div class="row">
                <div class="col-md-4 col-sm-6 col-12 divCarte">
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">un</div>
                      </div>
                    </div>
                    <div className="up">up</div>
                    <div className="down">down</div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 col-12 divCarte">
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">deux</div>
                      </div>
                    </div>
                    <div className="up">up</div>
                    <div className="down">down</div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 col-12 divCarte">
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">trois</div>
                      </div>
                    </div>
                    <div className="up">up</div>
                    <div className="down">down</div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 col-12 divCarte">
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">quatre</div>
                      </div>
                    </div>
                    <div className="up">up</div>
                    <div className="down">down</div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 col-12 divCarte">
                  <div className="carte">
                    <div className="couvCarte">
                      <div className="rond">
                        <div className="rond2">cinq</div>
                      </div>
                    </div>
                    <div className="up">up</div>
                    <div className="down">down</div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 col-12 divCarte">
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
