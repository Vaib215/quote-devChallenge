import React from 'react'

const Quote = ({quote}) => {
    return (
        <>
            <div id="quote">
                <q>
                {quote?quote:"Loading..."}
                </q>
            </div>
        </>
    )
}

export default Quote