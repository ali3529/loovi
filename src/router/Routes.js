import React from "react";


// PAGES DROPDOWN ALL ROUTES


// Contact us inner pages
import ContactEventOrganizer from "../views/inner-pages/pages/contact/ContactEventOrganizer";

// About us inner pages
import AboutEventOrganizer from "../views/inner-pages/pages/about/AboutEventOrganizer";


// SERVICE PAGES ROUTES
import ServiceV4 from "../views/inner-pages/service/ServiceV4";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";

// PORTFOLIO DROPDOWN ALL ROUTES 
import PortfolioV5 from "../views/inner-pages/portfolio/PortfolioV5";
import PortfolioDetailsV1 from "../views/inner-pages/portfolio/PortfolioDetailsV1";

// Not Found Page
import NotFound from "../views/NotFound";

// Route Specific
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import VrLanding from "../views/home-page/VrLanding";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={VrLanding} />
          <Route path="/contact" component={ContactEventOrganizer} />
          <Route path="/about" component={AboutEventOrganizer} />
          <Route path="/services" component={ServiceV4} />
          <Route path="/service-details" component={ServiceDetails} /> 
          <Route path="/portfolio" component={PortfolioV5} />
          <Route path="/portfolio-details" component={PortfolioDetailsV1} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
