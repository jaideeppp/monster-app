import React, { Component } from 'react'
import './App.css'
import CardList from './components/CardList/CardList'

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({
        monsters: data
      }))
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1 className="title"> Monsters Rolodex </h1>
        <input
          className="input"
          type="text"
          placeholder="Search monster"
          onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
