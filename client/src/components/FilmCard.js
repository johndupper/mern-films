import React from 'react'
import {
  Card, CardSubtitle,
  CardText, CardBody, CardTitle
} from 'reactstrap'

import formatAwards from '../formatters/formatAwards'

const FilmCard = props => {
  const {
    TitleName, ReleaseYear, Genres, Storylines
  } = props.data

  return (
    <Card style={{ 'min-width': '300px', 'text-align': 'center' }}>
      <CardBody>
        <CardTitle style={{ 'font-size': '2.25rem' }}>
          {TitleName} ({ReleaseYear})
        </CardTitle>

        <CardSubtitle style={{ 'font-size': '1.5rem' }}>
          {Genres.join(', ')}
        </CardSubtitle>

        <br />

        <CardText style={{ 'font-size': '1.2rem' }}>
          {Storylines[0].Description}
        </CardText>

        <br />

        <CardText style={{ 'font-size': '1.2rem', 'text-align': 'left' }}>
          {formatAwards(props.data)}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default FilmCard
