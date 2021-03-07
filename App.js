import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Tax from "./components/Tax";
import Homeloan from "./components/Homeloan";
import Usefulinks from "./components/Usefulinks";
import MapContainer from "./components/MapContainer";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Downloads from "./components/Downloads";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        <About/>
        <Tax/>
        <Services/>
        <Usefulinks/>
        <Homeloan/>
        <Contact/>
       </Route>
        <Route exact path="/About">
          <Header/>
          <About />
          
        </Route>
        <Route exact path="/Services">
        <Header />
          <Services />
        </Route>
        <Route exact path="/Tax">
          <Header />
          <Tax />
        </Route>
        <Route exact path="/Contact">
          <Header />
          <Contact />
        </Route>
        <Route exact path="/Usefulinks">
          <Header />
          <Usefulinks/>
        </Route>
        <Route exact path="/Homeloan">
          <Header />
          <Homeloan />
        </Route>
        <Route exact path="/Faqs">
          <Header />
          <Faqs />
        </Route>
        <Route exact path="/Downloads">
          <Header />
          <Downloads />
        </Route>
      </Switch>
    </div>
  </Router>
             );
        
}

export default App;
