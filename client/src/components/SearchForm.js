import React, { Component } from 'react'
import { InputGroup, Input } from 'reactstrap'

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
      <InputGroup>
        <Input
          placeholder='search by film name'
          onChange={this.onChange}
        />
      </InputGroup>
    )
  }
}
