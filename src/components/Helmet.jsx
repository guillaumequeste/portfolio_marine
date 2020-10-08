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
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="keywords" content="Marine Queste chef de projet portfolio book marketing" />
                    <meta name="description" content="Portfolio de Marine Queste, chef de projet" />
                    <meta property="og:title" content="Portfolio de Marine Queste, chef de projet" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https:/www.marinequeste.fr" />
                    <meta property="og:image" content="https://marinequeste.fr/img/marine_queste.jpg" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Portfolio de Marine Queste, chef de projet" />
                    <meta property="og:description" content="Portfolio de Marine Queste, chef de projet" />
                    <meta property="og:site_name" content="Portfolio de Marine Queste, chef de projet" />
                    <meta name="twitter:description" content="Portfolio de Marine Queste, chef de projet" />
                    <meta name="twitter:title" content="Portfolio de Marine Queste, chef de projet" />
                    <meta name="twitter:image" content="https://marinequeste.fr/img/marine_queste.jpg" />
                </Helmet>
            </div>
        )
    }
}

export default HelmetComponent