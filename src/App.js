import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/searcBox/searchBox.component'

class App extends Component{

  state={
    monsters:[],
    searchField: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}))
    .catch(error=> console.log(error))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const {monsters, searchField} = this.state 
    const filteredMonsters = monsters.filter(
      m => m.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox placeholder={'search monters'} handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
