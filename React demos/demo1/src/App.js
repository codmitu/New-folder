import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //npm install react-router-dom
import { Content } from './Content';
import { AddForm } from './AddForm';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
      return (
            <Router>
                  <h1 style={{ textAlign: 'center', marginBottom: '100px' }}>ToDo List</h1>
                  <Switch>
                        <Route exact path="/" component={Content} />
                        <Route path="/form" component={AddForm} />
                  </Switch>
            </Router>
      )
}

export default App;