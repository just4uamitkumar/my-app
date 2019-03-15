import React, { Component } from 'react';
import {BrowserRouter,  Switch, Route } from 'react-router-dom';

import { DefaultLayout } from './views'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={DefaultLayout} />
          <Route path="/Document" exact component={DefaultLayout} />
          <Route path="/LifeCycle" exact component={DefaultLayout} />
          <Route path="/Stateless" exact component={DefaultLayout} />
          <Route path="/AjaxCall" exact component={DefaultLayout} />
          // <Route path="/Login" exact component={DefaultLayout} />
          <Route path="/test/:id" exact component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
