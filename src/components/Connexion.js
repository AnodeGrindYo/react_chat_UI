import React from 'react'

class Connexion extends React.Component {

    goToChat = event => {
        event.preventDefault()
        // récupération du pseudo
        console.log(this.pseudoInput.value)
        // TODO : changement d'url
    }

    render() {
        return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={(e) => this.goToChat(e)} >
                    <input type="text" placeholder="Pseudo" required ref={(input) => {this.pseudoInput = input}} />
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

export default Connexion