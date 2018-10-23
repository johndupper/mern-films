import React, { Component } from 'react'
import { Row, Col, Input } from 'reactstrap'

const placeholder = 'search by title, genre, year, actor...'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    this.props.onChange(event.target.value)
  }

  render () {
    return (
      <Row>
        <Col lg='12'>
          <Input
            onChange={this.onChange}
            className='search-input'
            placeholder={placeholder} />
        </Col>
      </Row>
    )
  }
}
