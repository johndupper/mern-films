import React from 'react'
import {
  Modal, ModalHeader,
  ModalBody, ModalFooter
} from 'reactstrap'

const FilmModal = props => {
  const film = props.data
  console.log('open modal called for', film.TitleName)

  // console.log(storylines, awards)

  return (
    <Modal>
      <ModalHeader>{film.TitleName}</ModalHeader>
      <ModalBody />
      <ModalFooter />
    </Modal>
  )
}

export default FilmModal
