import React, { Component } from 'react'
import {Helmet} from "react-helmet"

class HelmetComponent extends Component {
  
    render () {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.title}</title>
                    <link rel="canonical" href={this.props.link} />
                    <meta name="keywords" content="Guillaume Queste developpeur web projet decouverte" />
                    <meta name="description" content="Découverte de la Normandie et du Littoral" />
                    <meta property="og:title" content="Découverte de la Normandie et du Littoral" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https:/www.guillaumequeste.fr" />
                    <meta property="og:image" content="http://decouverte.guillaumequeste.fr/img/histoire.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Découverte de la Normandie et du Littoral" />
                    <meta property="og:description" content="Découverte de la Normandie et du Littoral" />
                    <meta property="og:site_name" content="Découverte de la Normandie et du Littoral" />
                    <meta name="twitter:description" content="Découverte de la Normandie et du Littoral" />
                    <meta name="twitter:title" content="Découverte de la Normandie et du Littoral" />
                    <meta name="twitter:image" content="http://decouverte.guillaumequeste.fr/img/histoire.png" />
                </Helmet>
            </div>
        )
    }
}

export default HelmetComponent