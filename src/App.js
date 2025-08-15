// React imports
import React, { useEffect } from "react";
// Third-party imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// fs imports
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Homepage/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import Contacts from "./pages/Contacts/Contacts";
import Awards from "./pages/Awards/Awards";
import Societies from "./pages/SocietiesProfile/profile";
import Events from "./pages/Events/Events";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery/Gallery";
import FAQ from "./pages/FAQ/FAQ";
import Tech from "./pages/Committees/2021/Tech";
import Sports from "./pages/Committees/2021/Sports";
import Welfare from "./pages/Committees/2021/Welfare";
import Socult from "./pages/Committees/2021/Socult";
import AOS from "aos";
import "aos/dist/aos.css";
import Elections from "./pages/Elections/Elections";
import ElectionCandidates from "./pages/Elections/ElectionCandidates";
import CertifGen from "./pages/admin/CertificateGenerator/CertifGen";
import EventsUpdatePage from "./pages/admin/DataUpdate/EventsUpdatePage";
import Nominations from "./pages/Nominations/Nominations";
import LiveScoreboard from "./pages/LiveScoreboard/LiveScoreboard";
import Results from "./pages/Results/Results";
import ViewCertificate from "./pages/certifgen/ViewCertificate";
import LetterToYou from "./pages/LetterToYou/LetterToYou"
import SocietyForm from "./pages/SocReg/form";
import PostFormPage from "./Societies/PostFormPage";

// Importing the society pages 
import Profile from "./pages/SocietiesProfile/profile";
import BrowseSocieties from "./pages/BrowseSocieties";
// import SocietyLayout from "./pages/Societies/SocietyLayout";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          {/* Redirects */}
          <Route exact path="/societies/:society_slug" render={() => <Profile />} />
          <Route exact path="/societies/" render={() => <BrowseSocieties />} />

          {/* Admin Routes */}  
          <Route exact path="/login" component={Login} />
          <Route exact path="/letter-to-you" component={LetterToYou} />
          <Route exact path="/socReg" component={SocietyForm} />
          <PrivateRoute exact path="/admin" component={Dashboard} />
          <PrivateRoute exact path="/admin/certificate" component={CertifGen} />
          <PrivateRoute
            exact
            path="/admin/events"
            component={EventsUpdatePage}
          />
          {/* Homepage Routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/committees/tech" component={Tech} />
          <Route exact path="/committees/sports" component={Sports} />
          <Route exact path="/committees/welfare" component={Welfare} />
          <Route exact path="/committees/socult" component={Socult} />
          <Route exact path="/societies" component={Societies} />
          {/* <Route exact path="/societies2" component={SocietyLayout} /> */}
          {/* Events Route */}
          <Route exact path="/events" component={Events} />
          {/* Results Routes */}
          <Route exact path="/results/gc" component={Results} />
          <Route exact path="/results/interiit" component={Results} />
          {/* Awards Route */}
          <Route exact path="/awards" component={Awards} />
          {/* Contacts Routes */}
          <Route exact path="/contacts" component={Contacts} />
          {/* ContactUs Route */}
          <Route exact path="/ContactUs" component={ContactUs} />

          {/* Election Routes */}
          <Route exact path="/elections" component={Elections} />
          <Route exact path="/elections/candidates" component={ElectionCandidates} />

          {/* Nominations Route */}
          <Route exact path="/nominations" component={Nominations} />

          {/* FAQ Route */}
          <Route exact path="/faq" component={FAQ} />

          {/* Certifgen2.0 Route */}
          <Route exact path="/certifgen/view/:id" component={ViewCertificate} />

          {/* 404 - Not Found Route */}
          {/* <Route component={NotFound} /> */}

          {/* Live Scoreboard Route */}
          {/* <Route exact path="/livescoreboard" component={LiveScoreboard} /> */}

          {/* Other Routes */}
          {/*<Route exact path="/gallery" component={Gallery} /> */}
          <Route exact path="/posts/:postid/form" component={PostFormPage} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
