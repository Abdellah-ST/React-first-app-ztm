import './App.css';
import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .catch(err => alert(err));
  }

  filteredMonsters(){
    return this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase()));
  }

  render(){
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
       placeholder="Search monster"
       handleChange = { e => {
        this.setState({searchField: e.target.value});
      }} />
      <CardList monsters={this.filteredMonsters()} />
      </div>
    );
  }
}

export default App;
