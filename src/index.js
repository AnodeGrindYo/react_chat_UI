import React from 'react'
import { render } from 'react-dom'
// les components
import Connexion from './components/Connexion'
import App from './components/App'
import NotFound from './components/NotFound'
// rooter
import { BrowserRouter, Match, Miss } from 'react-router'
// import CSS
import './index.css'

const Root = () => {
    return (
        <BrowserRouter>
            <div> {/* wrapper dans une div pour que ça fonctionne */}
                <Match exactly pattern="/" component={Connexion} />
                <Match pattern="/pseudo/:pseudo" component={App} />
                <Miss compoentn={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(
    <Root />,
    document.getElementById('root')
);