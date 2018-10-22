import React from 'react'
import { CardDeck } from 'reactstrap'

import FilmCard from './FilmCard'
import FilmNotFound from './FilmNotFound'

const FilmList = props => {
  if (!props.data.length) return <FilmNotFound />

  return (
    <CardDeck>
      {
        props.data.map((f, i) => <FilmCard data={f} key={i} />)
      }
    </CardDeck>
  )
}

export default FilmList
