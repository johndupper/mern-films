import React, { Component } from 'react'
import axios from 'axios'

import FilmList from './FilmList'
import SearchForm from './SearchForm'
import filterMatches from '../helpers/filterMatches'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      allFilms: null,
      filteredFilms: null
    }
    this.getAllFilms = this.getAllFilms.bind(this)
    this.filterFilms = this.filterFilms.bind(this)
  }

  componentDidMount () {
    this.getAllFilms()
  }

  getAllFilms () {
    axios.get('/films').then(response => {
      const { data } = response
      const state = { allFilms: data, filteredFilms: data }
      this.setState(state)
    }).catch(error => {
      console.error(error)
    })
  }

  filterFilms (query) {
    const { allFilms } = this.state
    const filteredFilms = filterMatches(allFilms, query)
    this.setState(prev => ({ ...prev, filteredFilms }))
  }

  render () {
    const films = this.state.filteredFilms
    return (
      <div className='app'>
        <SearchForm onChange={this.filterFilms} />
        { films != null ? <FilmList data={films} /> : null }
      </div>
    )
  }
}
