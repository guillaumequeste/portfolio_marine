import React, { Component } from 'react'
import Header from './Header'
import Helmet from './Helmet'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { nom: '', prenom: '', email: '', telephone: '', sujet: '', message: '', errors: {nom:''} };
        this.handleChangeNom = this.handleChangeNom.bind(this);
        this.handleChangePrenom = this.handleChangePrenom.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeTelephone = this.handleChangeTelephone.bind(this);
        this.handleChangeSujet = this.handleChangeSujet.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeNom(event) {
        this.setState({nom: event.target.value})
    }

    handleChangePrenom(event) {
        this.setState({prenom: event.target.value})
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }

    handleChangeTelephone(event) {
        this.setState({telephone: event.target.value})
    }

    handleChangeSujet(event) {
        this.setState({sujet: event.target.value})
    }

    handleChangeMessage(event) {
        this.setState({message: event.target.value})
    }

    validateMail() {
        let errors = {}
        let formIsValid = true
        if (!this.state.nom || this.state.nom.length < 3) {
            errors.nom = "Minimum 3 caractères"
            formIsValid = false
        }
        if (!this.state.prenom || this.state.prenom.length < 3) {
            errors.prenom = "Minimum 3 caractères"
            formIsValid = false
        }
        if (!this.state.email || this.state.email.length < 6) {
            errors.email = "Minimum 6 caractères"
            formIsValid = false
        }
        let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if (!pattern.test(this.state.email)) {
            errors.email = "Ce n'est pas un email valide"
            formIsValid = false
        }
        if (!this.state.telephone || this.state.telephone.length < 8) {
            errors.telephone = "Minimum 8 caractères"
            formIsValid = false
        }
        if (!this.state.sujet || this.state.sujet.length < 3) {
            errors.nom = "Minimum 3 caractères"
            formIsValid = false
        }
        if (!this.state.message || this.state.message.length < 5) {
            errors.message = "Minimum 5 caractères"
            formIsValid = false
        }
        this.setState({
            errors: errors
        })
        return formIsValid
    }
    
    handleSubmit (event) {
        event.preventDefault()
        if (!this.validateMail()) {
            return
        }

        const templateId = 'template_id'; // mettre son template_id (emailjs.com -> email templates)
    
        this.sendFeedback(templateId, {nom: this.state.nom, prenom: this.state.prenom, email: this.state.email, telephone: this.state.telephone, sujet: this.state.sujet, message: this.state.message })
    }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            document.querySelector("#confirmation").innerHTML = 
                '<div style="font-weight: bold; text-align:center;"><h3>Message envoyé !</h3></div>'
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    render () {
        return (
            <div className="bodyLogement">
                <Helmet title={"Contact bases React"}
                        link={"https://www.guillaumequeste.fr"} />
                <Header />
                <form className="container pb-5">
                    <h3 className="text-center pt-2">Contact</h3>

                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input type="text"
                               className="form-control"
                               id="nom"
                               name="nom"
                                onChange={this.handleChangeNom}
                                placeholder="Nom"
                                required
                                value={this.state.nom}
                                error={this.state.errors.nom}/>
                            <span style={{color:"red"}}>{this.state.errors.nom}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="prenom">Prénom</label>
                        <input type="text"
                               className="form-control"
                               id="prenom"
                               name="prenom"
                                onChange={this.handleChangePrenom}
                                placeholder="Prénom"
                                required
                                value={this.state.prenom}
                                error={this.state.errors.prenom}/>
                            <span style={{color:"red"}}>{this.state.errors.prenom}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Adresse mail</label>
                        <input type="email"
                               className="form-control"
                               id="email"
                               name="email"
                                onChange={this.handleChangeEmail}
                                placeholder="Email"
                                required
                                value={this.state.email}
                                error={this.state.errors.email}/>
                             <span style={{color:"red"}}>{this.state.errors.email}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="telephone">N° de téléphone</label>
                        <input type="text"
                               className="form-control"
                               id="telephone"
                               name="telephone"
                                onChange={this.handleChangeTelephone}
                                placeholder="N° de téléphone"
                                required
                                value={this.state.telephone}
                                error={this.state.errors.telephone}/>
                        <span style={{color:"red"}}>{this.state.errors.telephone}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="sujet">Sujet</label>
                        <input type="text"
                               className="form-control"
                               id="sujet"
                               name="sujet"
                                onChange={this.handleChangeSujet}
                                placeholder="Sujet"
                                required
                                value={this.state.sujet}
                                error={this.state.errors.sujet}/>
                            <span style={{color:"red"}}>{this.state.errors.sujet}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            onChange={this.handleChangeMessage}
                            placeholder="Laisser votre message"
                            required
                            value={this.state.message}
                            rows="4"
                            error={this.state.errors.message}/>
                        <span style={{color:"red"}}>{this.state.errors.message}</span>
                    </div>

                    <div id="confirmation"></div>

                    <input type="button" className="btn btn-primary" value="Envoyer" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default Contact