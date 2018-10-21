import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { CardGroup } from 'reactstrap'

// import Film from './Film'
import FilmCard from './FilmCard'
import FilmNotFound from './FilmNotFound'

const FilmList = props => {
  if (props.data === null) return <div />

  if (!props.data.length) {
    return <ListGroup><FilmNotFound /></ListGroup>
  }

  return (
    <CardGroup>
      {props.data.map(f => <FilmCard data={f} />)}
    </CardGroup>
  )
}

export default FilmList
