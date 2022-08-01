import React from 'react'

const NewsCard = ({hit}) => {

  return (
    <div>{hit?.author}</div>
  )
}

export default NewsCard