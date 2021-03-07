import React from 'react'
import {Link} from "react-router-dom"
import { ExternalLink } from 'react-external-link';
import './faqs.css'

import Home from "../components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function Faqs() {
    return (
        <div>
      
          <div className="headerf">
            <div className="row">
           
                  </div>
               
                </div>
          
          
     
          
        
        <div className="bottom">
          <div className="bottomright">
       
          <h1 className="h1a">
        FAQs
    
          </h1>
          <ul>
            <li>
          <p>
             <a href="http://www.ato.gov.au">ato</a>
          <br/>
          <br/>
          <ul>
            
          <li>
              <a href="#red">red </a>
            </li>
            <li>
              <a href="#green">green </a>
            </li>
            <li>
              <a href="#blue">blue </a>
            </li>
           
          </ul>
         
          <nav>

<Link to="/">Home</Link>
<Link to="/">Home</Link>
<Link to="/">Home</Link>
<Link to="/">Home</Link>
                </nav>
                <Router>
                <Route exact path="/">
          
          <Home />
          </Route>
                </Router>
        
          <li>
          Centrelink: <ExternalLink href="http://www.centrelink.gov.au"/>
          <br/>
          <br/>
          </li>
          <li>
          Health Insurance Commission (HIC): <ExternalLink href="http://www.hic.gov.au"/>
          <br/>
          <br/>
          </li>
          <li>
          Family Assistance Office (FAO): <ExternalLink href="http://www.familyassist.gov.au"/>
          <br/>
          <br/>
          </li>
          <li>
    
        
          Australian Business Register (ABR):  <ExternalLink href="http://abr.gov.au"/>
          <br/>
          <br/>
          </li>
          <li>
          NSW Office Of Fair Trading: <ExternalLink href="http://www.fairtraiding .nsw.gov.au"/>
          <br/>
          <br/>
          </li>
          <li>
          NSW Office of State Revenue (OSR): <ExternalLink href="http://www.osr.nsw.gov.au"/>
          <br/>
          <br/>
          </li>
          <li>
    Australian Securities & Invsts Commission (ASIC): <ExternalLink href="http://www.asic.gov.au"/> 
          <br/>
          <br/>
          </li>
          <li>
          Australian Stock Exchange: <ExternalLink href="http://www.asx.com.au"/>
          
    
         
    <br/>
    <br/>
    </li>
    <li>
    Computer Share: <ExternalLink href="http://www-au.computershare.com"/>
          
    
         
    
    <br/>
          <br/>
          </li>
          <li>
          Link Market Services: <ExternalLink href="http://www.linkmarketservices.com.au"/>
          
    
         
    <br/>
    <br/>
    
    </li>     
          </p>
          </li>
          </ul>
    </div>
    <div>
            <div id="red"><h1>red</h1></div>
            <div id="green"><h1>green</h1></div>
            <div id="blue"><h1>blue</h1></div>
          </div>
    </div>
    </div>
      )
    }
      


export default Faqs
