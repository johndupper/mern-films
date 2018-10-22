import React, { Component } from 'react'
import {
  Button, Col,
  Card, CardSubtitle,
  CardBody, CardTitle, CardText, Modal,
  ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'

import formatStorylines from '../formatters/formatStorylines'
import formatAwards from '../formatters/formatAwards'
import formatCast from '../formatters/formatCast'

class FilmCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      collapse: {
        cast: false,
        awards: false
      }
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    this.setState(ps => ({ ...ps, modal: !ps.modal }))
  }

  render () {
    const film = this.props.data
    const { TitleName, ReleaseYear, Genres } = film

    return (
      <Col xs='12'>
        <Card>
          <CardBody>

            <CardTitle style={{ fontSize: '2rem' }}>
              {TitleName} ({ReleaseYear})
            </CardTitle>

            <CardSubtitle style={{ fontSize: '1.75rem' }}>
              {Genres.join(', ')}
            </CardSubtitle>

            <br />

            <CardText>{formatStorylines(film)}</CardText><br />

            <Button size='lg' onClick={this.toggleModal} >
              Show Film Details
            </Button>

            {
              this.state.modal
                ? (
                  <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggleModal} >

                    <ModalHeader>{TitleName}</ModalHeader>

                    <ModalBody>
                      {formatCast(film)}
                      {formatAwards(film)}
                    </ModalBody>

                    <ModalFooter>
                      <Button onClick={this.toggleModal}>Close</Button>
                    </ModalFooter>
                  </Modal>
                )
                : (null)
            }

          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default FilmCard
