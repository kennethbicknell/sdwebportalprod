//import src from '*.avif';

import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './Pages/Dashboard';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import GroupsPage from './Pages/GroupsPage';

function App() {
  return (
    <Router >
      <Switch>

    
        <Route path ="/" exact>
          <HomePage />
        </Route>
      

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>

        <Route path="/groups" exact>
          <GroupsPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
