
import React, { Component } from 'react'
import Header from './Header'

class NotFound extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="bodyContact">
                    <p>error not found</p>
                </div>
            </div>
        )
    }
}

export default NotFound