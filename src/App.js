import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Result from './component/Result';
import Login from './component/Login';
import Quiz from './component/Quiz';
import { NotFound } from './component/NotFound';
import { connect } from 'react-redux';

const App = ({ name = '' }) => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Quiz}>
            {name ? <Quiz /> : <Redirect to='/login' />}
          </Route>
          <Route path='/login' component={Login}>
            <Login />
          </Route>
          <Route path='/result' component={Result}>
            {name ? <Result /> : <Redirect to='/login' />}
          </Route>
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    name: state.user.name,
  };
};

export default connect(mapStateToProps)(App);
