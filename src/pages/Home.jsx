import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Author from '../components/Author'
import Quote from '../components/Quote'

const Home = () => {
  const quote = useLoaderData()
  return (
    <>
      <Quote quote={quote.body}/>
      <Author author={quote.author} category={quote.tags}/>
    </>
  )
}

export default Home