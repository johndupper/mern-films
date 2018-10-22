import React from 'react'
import { CardDeck } from 'reactstrap'

import FilmCard from './FilmCard'

const FilmList = props => {
  if (props.data === null) return <div />

  if (!props.data.length) {
    return <p>no films found</p>
  }

  if (props.data.length === 1) {
    // todo: diff. size for single card
  }

  return (
    <CardDeck>
      {props.data.map((f, i) => <FilmCard data={f} key={i} />)}
    </CardDeck>
  )
}

export default FilmList
