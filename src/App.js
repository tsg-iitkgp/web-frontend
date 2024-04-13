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
import Societies from "./pages/Societies/Societies";
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
import CertifGen2 from "./pages/newadmin/certifgen2/CertifGen2";
import CertifGenerate from "./pages/newadmin/certifgen2/CertifGenerate";
import NewLogin from "./pages/newadmin/NewLogin";
import ExistingTemplates from "./pages/newadmin/certifgen2/ExistingTemplates";
import UploadTemplates from "./pages/newadmin/certifgen2/UploadInterface";
import Canvas from "./pages/newadmin/certifgen2/Canvas";
import ViewLog from "./pages/newadmin/certifgen2/ViewLog";
import CertifPreview from "./pages/CertifPreview";
import LiveScoreboard from "./pages/LiveScoreboard/LiveScoreboard";
import Results from "./pages/Results/Results";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          {/* Admin Routes */}
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/admin" component={Dashboard} />
          <PrivateRoute exact path="/admin/certificate" component={CertifGen} />
          <PrivateRoute exact path="/admin/events" component={EventsUpdatePage} />
          <Route exact path ="/newadmin/certifgen2" component = {CertifGen2}/>
          <Route exact path ="/newadmin/certifgen2/certifgenerate" component = {CertifGenerate}/>
          <Route exact path ="/newadmin/login" component = {NewLogin} />
          <Route exact path = "/newadmin/certifgen2/existingtemplates" component={ExistingTemplates} />
          <Route exact path ="/newadmin/certifgen2/uploadtemplate" component = {UploadTemplates}/>
          <Route exact path ="/newadmin/certifgen2/uploadtemplate/canvas" component = {Canvas}/>
          <Route exact path = "/newadmin/certifgen2/viewlogs" component = {ViewLog} />
          <Route exact path="/certifpreview" component={CertifPreview} />
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
          <Route exact path="/nominations" component={Nominations} />
          <Route exact path="/elections" component={Elections} />
          
          {/* FAQ Route */}
          <Route exact path="/faq" component={FAQ} />
          {/* 404 - Not Found Route */}
          {/* <Route component={NotFound} /> */}

          {/* Live Scoreboard Route */}
          {/* <Route exact path="/livescoreboard" component={LiveScoreboard} /> */}

          <Route
            exact
            path="/elections/candidates"
            component={ElectionCandidates}
          />

          {/* Other Routes */}
          {/*<Route exact path="/gallery" component={Gallery} /> */}
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
