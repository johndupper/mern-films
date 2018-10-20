import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { films: [] }
  }

  componentDidMount () {
    this.getAllFilms()
  }

  getAllFilms () {
    axios.get('/films').then(res => {
      const films = res.data
      console.log(films)
      this.setState(ps => {
        return { ...ps, films }
      })
    })
  }

  render () {
    return (
      <div className='App'>
        <h1>this is where my app will go</h1>
      </div>
    )
  }
}

export default App
