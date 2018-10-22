import React, { Component } from 'react'
import { Row, Col, Input } from 'reactstrap'

const inputStyles = {
  'height': '10vh',
  'font-size': '1.75rem',
  'text-align': 'center'
}
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
            style={inputStyles}
            placeholder='search by film name, release year, or genre...'
            onChange={this.onChange}
          />
        </Col>
      </Row>
    )
  }
}
