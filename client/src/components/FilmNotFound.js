import React from 'react'
import {
  Col, Card, CardBody,
  CardTitle, CardText
} from 'reactstrap'

const FilmNotFound = () => (
  <Col>
    <Card>
      <CardBody>
        <CardTitle>
          I couldn't find the title you're looking for...
        </CardTitle>

        <CardText>
          Hint: Your options are quite limited.
          May I advise you take a gander at the full list instead?
        </CardText>
      </CardBody>
    </Card>
  </Col>
)

export default FilmNotFound
