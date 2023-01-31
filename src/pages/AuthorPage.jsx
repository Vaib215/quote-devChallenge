import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAuthorQuotes } from '../helpers/quotes'
import Quote from '../components/Quote'

const AuthorPage = () => {
    const { id } = useParams()
    const [quotes, setQuotes] = useState(null)
    const fetchData = async () => {
        const data = await getAuthorQuotes(id)
        const quotesArr = []
        data.map(quote => {
            quotesArr.push(quote.content)
        })
        setQuotes(quotesArr)
    }
    useEffect(() => {
        fetchData()
    }, [id])
    return (
        <div id="auth-page">
            <h2>{id}</h2>
            {quotes!==null?quotes.map((quote,index) => (
                <Quote key={index} quote={quote} />
            )):<h2>Loading...</h2>}
        </div>
    )
}

export default AuthorPage