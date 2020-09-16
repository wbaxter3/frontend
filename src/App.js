import React, { Component } from 'react';

import Contacts from './components/contacts';
const API = 'https://3yejoomask.execute-api.us-east-1.amazonaws.com/prod//player-season-data?year=';
const DEFAULT_QUERY = '2018';

class App extends Component {
  state = {
    contacts: []
  };


  componentDidMount() {
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
    }

    render() {
          return (
            <Contacts contacts={this.state.contacts} />
          )
        }
}
export default App;
