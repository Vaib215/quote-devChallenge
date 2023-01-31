const quotes = async () => {
    const response = await fetch('https://favqs.com/api/qotd')
    const data = await response.json()
    return data.quote
}

const getAuthorQuotes = async (author) => {
    const response = await fetch(`https://favqs.com/api/quotes/?filter=${author}&type=author`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        Authorization: 'Token token="73a567c9eaa68890d677caf1d367e1db"'
      },
    })
    const data = await response.json()
    return data.quotes
}

export {quotes, getAuthorQuotes}
