import React, { Component } from 'react'
import {
  Button, Col, Card, Modal,
  CardTitle, CardSubtitle, CardBody, CardText,
  ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'

import formatStorylines from '../formatters/formatStorylines'
import formatAwards from '../formatters/formatAwards'
import formatCast from '../formatters/formatCast'

class FilmCard extends Component {
  constructor (props) {
    super(props)
    this.state = { modal: false }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    const modal = !this.state.modal
    this.setState(ps => ({ ...ps, modal }))
  }

  render () {
    const film = this.props.data
    const { TitleName, ReleaseYear, Genres } = film

    return (
      <Col xs='12'>
        <Card>
          <CardBody>
            <CardTitle>{ TitleName } ({ ReleaseYear })</CardTitle>
            <CardSubtitle>{ Genres.join(', ') }</CardSubtitle>
            <br />

            <CardText>{ formatStorylines(film) }</CardText>

            <Button onClick={this.toggleModal}>
              Show Film Details
            </Button>

            {
              this.state.modal
                ? (
                  <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggleModal}>

                    <ModalHeader>{ TitleName }</ModalHeader>

                    <ModalBody>
                      { formatCast(film) }
                      { formatAwards(film) }
                    </ModalBody>

                    <ModalFooter>
                      <Button onClick={this.toggleModal}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                )
                : null
            }
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default FilmCard
