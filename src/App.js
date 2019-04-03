import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from './components/MainPage';
import Tacos from './components/Tacos';
import Cantina from './components/Cantina';
import Footer from './components/footer';

class App extends Component {

  state = {
        page:'unset yet',
  }

  render() {
    return (
        <BrowserRouter>
          <Container fluid="true" className="App" style={this.state.page === 'index' ? {border: 'solid #fff 10px'} : {} }>
              <Switch>
                  <Route path='/' exact component={MainPage} />
                  <Route path='/tacos' exact component={Tacos} />
                  <Route path='/cantina' exact component={Cantina} />
              </Switch>
          </Container>
          <Footer />
      </BrowserRouter>
     )
  }
}

export default App;
