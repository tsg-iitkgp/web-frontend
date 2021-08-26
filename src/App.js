// React imports
import React from 'react';
// Third-party imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// fs imports
import Home from './pages/Home';
import Dashboard from './pages/admin/Dashboard';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoute';
import Contacts from './pages/Contacts';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" component={Contacts} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
