import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <Route  path='*'>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
