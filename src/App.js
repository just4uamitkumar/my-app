import React, { Component } from 'react';
import {BrowserRouter,  Switch, Route } from 'react-router-dom';
import { DefaultLayout } from './views';


class App extends Component {
  render() {
    return (
      <div>      
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={DefaultLayout} />
            <Route path="/Document" exact component={DefaultLayout} />
            <Route path="/LifeCycle" exact component={DefaultLayout} />
            <Route path="/Stateless" exact component={DefaultLayout} />
            <Route path="/AjaxCall" exact component={DefaultLayout} />
            <Route path="/AxiosCallA" exact component={DefaultLayout} />
            <Route path="/AxiosCallB" exact component={DefaultLayout} />
            <Route path="/AxiosCallC" exact component={DefaultLayout} />
            <Route path="/AxiosCallD" exact component={DefaultLayout} />
            <Route path="/UseJson" exact component={DefaultLayout} />
            <Route path="/FormValid" exact component={DefaultLayout} />
            <Route path="/FormValidation" exact component={DefaultLayout} />
            <Route path="/Hook" exact component={DefaultLayout} />
            <Route path="/Tabs" exact component={DefaultLayout} />
            <Route path="/test/:id" exact component={DefaultLayout} />          
          </Switch>
        </BrowserRouter>

        

      </div>
    );
  }
}

export default App;
