const quotes = async () => {
  const response = await fetch('https://api.quotable.io/random')
  const data = await response.json()
  return data
}

const getAuthorQuotes = async (slug) => {
  const response = await fetch(`https://quotable.io/quotes?author=${slug}`)
  const data = await response.json()
  return data.results
}

export { quotes, getAuthorQuotes }
