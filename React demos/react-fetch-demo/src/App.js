import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Add from './components/Add';
import Details from './components/Details';
import Edit from './components/Edit';

function App() {


  return (
    <Router>
      <div className="App">
        <Header />
        <section className="links">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/details/:index">
              <Details />
            </Route>
            <Route path="/edit/:index">
              <Edit />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
