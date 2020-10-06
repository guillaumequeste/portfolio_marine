
import React, { Component } from 'react'
import Header from './Header'
import file from "../docs/CVGuillaumeQueste.pdf"

class Presentation extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="bodyContact">
                    <p>presentation portfolio marine</p>
                    <a href={file} without rel="noopener noreferrer" target="_blank">
                        <button trailingIcon="picture_as_pdf" label="Resume">
                            PDF
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Presentation