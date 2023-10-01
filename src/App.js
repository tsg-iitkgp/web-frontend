// React imports
import React, { useEffect } from "react";
// Third-party imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// fs imports
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import ContactUs from "./components/ContactForm/ContactForm";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Results from "./pages/Results";
import Awards from "./pages/Awards";
import Booking from "./pages/Booking";
import Societies from "./pages/Societies";
import Events from "./pages/Events";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Gallery/Gallery";
import FAQ from "./components/FAQ/FAQ";
import Tech from "./pages/committees/2021/Tech";
import Sports from "./pages/committees/2021/sports";
import Welfare from "./pages/committees/2021/welfare";
import Socult from "./pages/committees/2021/Socult";
import AOS from "aos";
import "aos/dist/aos.css";
import Elections from "./pages/Elections/Elections";
import ElectionCandidates from "./pages/Elections/ElectionCandidates";
import Opportunities from "./pages/Opportunities/Opportunities";
import OpportunityPage from "./pages/Opportunities/OpportunityPage";
import CertifGen from "./pages/admin/CertificateGenerator/CertifGen";
import EventsUpdatePage from "./pages/admin/DataUpdate/EventsUpdatePage";
import Nominations from "./pages/Nominations/Nominations";
import CertifGen2 from "./pages/newadmin/certifgen2/CertifGen2";
import CertifGenerate from "./pages/newadmin/certifgen2/CertifGenerate"

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <PrivateRoute exact path="/admin" component={Dashboard} />
          <PrivateRoute exact path="/admin/certificate" component={CertifGen} />
          <PrivateRoute exact path="/admin/events" component={EventsUpdatePage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/awards" component={Awards} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/results/gc" component={Results} />
          <Route exact path="/results/interiit" component={Results} />
          <Route exact path="/results/livescore" component={Results} />
          <Route exact path="/contacts/secretaries" component={Contacts} />
          <Route
            exact
            path="/contacts/current-office-bearers"
            component={Contacts}
          />
          <Route exact path="/elections" component={Elections} />
          <Route exact path="/nominations" component={Nominations} />
          <Route
            exact
            path="/elections/candidates"
            component={ElectionCandidates}
          />
          <Route exact path ="/newadmin/certifgen2" component = {CertifGen2}/>
          <Route exact path ="/newadmin/certifgen2/certifgenerate" component = {CertifGenerate}/>
          <Route exact path="/contacts/pastBearers" component={Contacts} />
          <Route exact path="/contacts/staff" component={Contacts} />
          <Route exact path="/societies" component={Societies} />
          <Route exact path="/committees/2021/tech" component={Tech} />
          <Route exact path="/committees/2021/sports" component={Sports} />
          <Route exact path="/committees/2021/welfare" component={Welfare} />
          <Route exact path="/committees/2021/Socult" component={Socult} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/opportunities" component={Opportunities} />
          <Route exact path="/opportunities/:id" component={OpportunityPage} />
          <Route exact path="/faq" component={FAQ} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
