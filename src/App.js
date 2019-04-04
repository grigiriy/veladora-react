import React, { Component } from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Tacos from './components/Tacos';
import Cantina from './components/Cantina';
import Footer from './components/footer';

class App extends Component {

  state = {
        page:'index',
        mobile: false
  }


  render() {
    return (
        <BrowserRouter>
          <div className="App"  >
              <Switch>
                  <Route path='/' exact render={props => <MainPage { ...props } />} />
                  <Route path='/tacos' exact render={props => <Tacos { ...props } />} />
                  <Route path='/cantina' exact render={props => <Cantina { ...props } />} />
              </Switch>
          </div>
          { this.state.page !== 'index' && <Footer /> }
      </BrowserRouter>
     )
  }
}

export default App;
