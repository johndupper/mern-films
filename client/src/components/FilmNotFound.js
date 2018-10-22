import React from 'react'
import { Col, Card, CardBody, CardTitle } from 'reactstrap'

const FilmNotFound = () => {
  return (
    <Col>
      <Card>
        <CardBody>
          <CardTitle style={{ fontSize: '2rem' }}>
            I couldn't find the title you're looking for...
            <br />
            (Hint: Your options are quite limited. May I advise you
            take a gander at the full list instead?)
          </CardTitle>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FilmNotFound
