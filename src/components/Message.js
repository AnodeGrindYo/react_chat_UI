import React from 'react'

class Message extends React.component {
    render() {
        return (
            <p className="user-message">
                {this.props.pseudo}: mon message de test
            </p>
        )
    }
}

export default Message