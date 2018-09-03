import React, { Component } from 'react';
import './App.css';
import Timeline from './timeline/Timeline.js';
import Details from './details/Details.js';

import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
            <header className="App-header">
              <Link className="App-logo" to="/">
                <h1 className="App-title">SH</h1>
                <i className="fas fa-tv app-icon"></i>
                <h1 className="App-title">WTIME</h1>
              </Link>
            </header>
          <div className="main">
              <Switch>
                <Route path='/details/:id' component={Details}></Route>
                <Route exac path='/' component={Timeline}></Route>
              </Switch>
          </div>
        </div>
    );
  }
}

export default App;
