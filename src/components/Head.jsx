import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
    return (
        <header className="App-header">
            <Link id="btn" to={'/'}>
                <span>random</span>
                <span className="material-icons">autorenew</span>
            </Link>
        </header>
    )
}

export default Head