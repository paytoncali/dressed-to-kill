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
import Jumbo from "./components/jumbotron";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
  <Router>
     <Navigate />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/schedule" element={<SchedulePage />} />
        <Route exact path="/hosts" element={<HostPage />} />
        <Route exact path="/comedians" element={<ComedianPage />} />
        <Route exact path="/contactus" element={<ContactUsPage />} />
      </Routes>
   </Router>
   <Footer />
    </div>
  );
}

export default App;
