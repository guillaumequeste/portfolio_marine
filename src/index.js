import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Book from './components/Book'
import Centres_d_interets from './components/Centres_d_interets'
import Competences from './components/Competences'
import Etudes from './components/Etudes'
import Experiences_additionnelles from './components/Experiences_additionnelles'
import Experiences_professionnelles from './components/Experiences_professionnelles'
import CarteDeVisite from './components/CarteDeVisite'
import FairePart from './components/FairePart'
import Affiche from './components/Affiche'
import DossierClients from './components/DossierClients'
import Autre from './components/Autre'
import About_Me from './components/About_Me'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import Popper from "popper.js"
import "bootstrap/dist/js/bootstrap.bundle.min"

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />

      <Route path="/about_me" component={About_Me} />
      <Route path="/book" component={Book} />
      <Route path="/centres_d_interets" component={Centres_d_interets} />
      <Route path="/competences" component={Competences} />
      <Route path="/etudes" component={Etudes} />
      <Route path="/experiences_additionnelles" component={Experiences_additionnelles} />
      <Route path="/experiences_professionnelles" component={Experiences_professionnelles} />
      <Route path="/carte_de_visite" component={CarteDeVisite} />
      <Route path="/faire_part" component={FairePart} />
      <Route path="/affiche" component={Affiche} />
      <Route path="/dossier_clients" component={DossierClients} />
      <Route path="/autre" component={Autre} />

      <Route path="/contact" component={Contact} />
      <Route path="/notfound" component={NotFound} />
      <Redirect to="/notfound" />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
