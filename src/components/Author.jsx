import React from 'react'
import {Link} from 'react-router-dom'
const Author = ({author,slug,category}) => {
    return (
        <Link id="auth-name" to={slug}>
            <div>
                <h2>{author}</h2>
                <small>{typeof category=="object" && category[0]}</small>
            </div>
            <span className="material-icons">
                trending_flat
            </span>
        </Link>
    )
}

export default Author