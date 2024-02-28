import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeadGraphic from "./components/headgraphic";
import Navigate from "./components/navbar";
import AboutPage from "./pages/aboutpage";
import ComedianPage from "./pages/comedianspage";
import ContactUsPage from "./pages/contactuspage";
import HomePage from "./pages/homepage";
import HostPage from "./pages/hostpage";
import SchedulePage from "./pages/schedulepage";


function App() {
  return (

  <Router>
     <div>
     <Navigate />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/schedule" component={SchedulePage} />
        <Route exact path="/hosts" component={HostPage} />
        <Route exact path="/comedians" component={ComedianPage} />
        <Route exact path="/contactus" component={ContactUsPage} />
      </Routes>
    
     </div>
   </Router>
  );
}

export default App;
