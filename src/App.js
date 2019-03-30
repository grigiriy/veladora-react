import React, { Component } from 'react';
import MainPage from './components/mainPage';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route } from "react-router-dom"

class App extends Component {
  render() {
    return <BrowserRouter>
          <Container fluid="true" className="App" style={{border: 'solid #fff 10px'}}>
              <MainPage />
          </Container>
      </BrowserRouter>
  }
}

export default App;
