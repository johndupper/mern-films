import React, { Component } from 'react'
import {
  Button, Col,
  Card, CardSubtitle, CardText,
  CardBody, CardTitle, Modal,
  ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'

import formatAwards from '../formatters/formatAwards'

class FilmCard extends Component {
  constructor (props) {
    super(props)
    this.state = { modal: false }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    this.setState(ps => ({ ...ps, modal: !ps.modal }))
  }

  render () {
    const {
      TitleName, ReleaseYear, Genres,
      Storylines, Participants
    } = this.props.data

    return (
      <Col sm='12' lg='6'>
        <Card>
          <CardBody>

            <CardTitle>{TitleName} ({ReleaseYear})</CardTitle>
            <CardSubtitle>{Genres.join(', ')}</CardSubtitle>
            <CardText>...</CardText>

            <Button onClick={this.toggleModal}>
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
                      {Storylines[0].Description || null}
                      <br />
                      {
                        <strong>
                          {Participants
                            .filter(p => p['IsKey'])
                            .map(p => p.Name)
                            .join(', ')}
                        </strong>
                      }
                      <br />
                      {formatAwards(this.props.data)}
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
