import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Tacos from './components/Tacos';
import Cantina from './components/Cantina';
import Footer from './components/footer';

const cw = window.innerWidth;
class App extends Component {

  state = {
        page:'index',
        mobile: cw < 1024 ? true : false
  }

  render() {
    return <>
          <div className={"App " + (this.state.mobile ? '_mobile' : '_desktop')}  >
              <Switch>
                  <Route path='/' exact render={props => <MainPage { ...props } />} />
                  <Route path='/tacos' exact render={props => <Tacos { ...props } />} />
                  <Route path='/cantina' exact render={props => <Cantina { ...props } />} />
              </Switch>
          </div>
          { this.state.page !== 'index' && <Footer /> }
      </>
  }
}

export default App;
