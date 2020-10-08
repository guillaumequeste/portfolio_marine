import React from 'react';
import './App.css';
import Header from './components/Header'
import Helmet from './components/Helmet'
import { Link } from 'react-router-dom'

const App = () => (
  <>
    <Helmet title={"Accueil Portfolio de Marine Queste, chef de projet"}
              link={"https://marinequeste.fr"} />
    <Header />

    <div className="bodyPhoto">
      <div className="photo">
        <img src={require("./img/marine_queste.jpg")} alt="photo" className="rounded-circle"></img>
      </div>
    </div>
    
    <div className="app">
      <div className="ligne">
        <Link to="/about_me" className="case presentation">
          <div className="domaine">
            <p className="titre_domaine titre_presentation">About me</p>
          </div>
        </Link>
        <Link to="/etudes" className="case etudes">
          <div className="domaine">
            <p className="titre_domaine titre_etudes">Etudes</p>
          </div>
        </Link>
      </div>
      <div className="ligne">
        <Link to="/experiences_professionnelles" className="case experiences_professionnelles">
          <div className="domaine">
            <p className="titre_domaine titre_experiences_professionnelles">Expériences professionnelles</p>
          </div>
        </Link>
        <Link to="/experiences_additionnelles" className="case experiences_additionnelles">
          <div className="domaine">
            <p className="titre_domaine titre_experiences_additionnelles">Expériences additionnelles</p>
          </div>
        </Link>
      </div>
      <div className="ligne">
        <Link to="/centres_d_interets" className="case centres_d_interets">
          <div className="domaine">
            <p className="titre_domaine titre_centres_d_interets">Centres d'intérêts</p>
          </div>
        </Link>
        <Link to="/competences" className="case competences">
          <div className="domaine">
            <p className="titre_domaine titre_competences">Competences</p>
          </div>
        </Link>
      </div>
      <div className="ligne">
        <Link to="/book" className="case book">
          <div className="domaine">
            <p className="titre_domaine titre_book">Book</p>
          </div>
        </Link>
        <Link to="/contact" className="case contact">
          <div className="domaine">
            <p className="titre_domaine titre_contact">Contact</p>
          </div>
        </Link>
      </div>
  </div>
  </>
)

export default App;