
import React, { Component } from 'react'
import Header from './Header'

class Contact extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="bodyContact">
                    <div className="contact">
                        <h3 className="msgContact">guillaume.queste@laposte.net</h3>
                        <a href="http://www.guillaumequeste.fr" target="_blank" rel="noopener noreferrer" className="msgContact">http://www.guillaumequeste.fr</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact