import React from 'react'
import './usefulinks.css'
import {Link} from "react-router-dom"
import { ExternalLink } from 'react-external-link';

function Usefulinks() {
  return (
    <div>
    <header className="headeru">
      <div className="container">
        <div className="row">
          <marquee direction="right">
       <h1 className="uh1">Links to main websites </h1> 
       </marquee>
              </div>
           
            </div>
      
      
 
      </header>
    
    <div className="bottom">
      <div className="bottomright">
   
      <h1 className="h1a">
     USEFUL LINKS

      </h1>
      <ul>
        <li>
      <p>
      Australian Tax Office (ATO):    <ExternalLink href="http://www.ato.gov.au" />
      <br/>
      <br/>
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
</div>
</div>
  )
}

export default Usefulinks;
