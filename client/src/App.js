
import React, { Component } from 'react';
import Snippets from './components/Snippets';

class App extends Component {
  state = {
    snippets: []
  }
  componentDidMount() {
    fetch('/snippets')
    .then(res => res.json())
    .then((data) => {
      this.setState({ snippets: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <container>
        <Snippets snippets={this.state.snippets} />
      </container>
          
        );
  }
}

export default App;