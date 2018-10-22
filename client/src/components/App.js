import React, { Component } from 'react'
import axios from 'axios'

import SearchForm from './SearchForm'
import FilmList from './FilmList'
import filmMatchesQuery from '../helpers/filmMatchesQuery'

class App extends Component {
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
    axios.get('/films')
      .then(response => {
        this.setState({
          allFilms: response.data,
          filteredFilms: response.data
        })
      }).catch(error => console.error(error))
  }

  filterFilms (query) {
    const allFilms = this.state.allFilms
    const filteredFilms = allFilms.filter(film => (
      filmMatchesQuery(film, query)
    ))
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

export default App
