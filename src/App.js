// React imports
import React from "react";
// Third-party imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// fs imports
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Results from "./pages/Results";
import Awards from "./pages/Awards";
import Booking from "./pages/Booking";
import Layout from "./components/Layout";
import Societies from "./pages/Societies";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Societies" component={Societies} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/awards" component={Awards} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/login" component={Login} />
<<<<<<< Updated upstream
=======
        <Route exact path="/results/gc" component={Results} />
        <Route exact path="/results/inter_iit" component={Results} />
        <Route exact path="/contacts/secretaries" component={Contacts} />
        <Route exact path="/contacts/currentSenate" component={Contacts} />
        <Route exact path="/contacts/pastBearers" component={Contacts} />
        <Route exact path="/societies" component={Societies} />
        <Route exact path="/events" component={Events} />

>>>>>>> Stashed changes
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
