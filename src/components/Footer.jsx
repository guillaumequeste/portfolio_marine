import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Footer extends Component {
    render () {
        return (
            <div className="bodyFooter">
                <Link to="/" className="divFooter">
                    <div className="linkFooter">
                        <span>Accueil</span>
                    </div>
                </Link>
                <Link to="/littoral" className="divFooter">
                    <div className="linkFooter">
                        <span>Littoral</span>
                    </div>
                </Link>
                <Link to="/seine" className="divFooter">
                    <div className="linkFooter">
                        <span>Seine</span>
                    </div>
                </Link>
                <Link to="/autres" className="divFooter">
                    <div className="linkFooter">
                        <span>Autres</span>
                    </div>
                </Link>
                <Link to="/contact" className="divFooter">
                    <div className="linkFooter">
                        <span>Contact</span>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Footer