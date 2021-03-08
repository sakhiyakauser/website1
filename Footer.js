import React from 'react'
import {Link} from "react-router-dom";
import './footer.css'
function Footer() {
    return (
        <div className="footer">
            <div>
            <h1 className="h1f">P<span className="h1f">roficient</span></h1>
            <h1 className="h1n">Contact</h1> 023456789
    <h1 className="h1n">Mail</h1> avinashjawahar@gmail.com
                </div>
            <div>
            <p> Avinash Kumar Jhawar <br/>
 
3/154-156, Bridge Road,
<br>
</br>
WESTMEAD, NSW - 2145<br></br>
P: 02-9687 5373<br></br>
M: 0425 330 826</p> 
  
            </div>
            <div className="navbar__rightf"  >
            
          
               <Link className="navbarlinksf" to="/">Home
               </Link>
             
              <Link className="navbarlinksf"to="/services">Services
               </Link>
             
              <Link className="navbarlinksf"to="/about">About
               </Link>
              
              <Link className="navbarlinksf" to="/contact">Contacts
               </Link>
           
            </div>
            
            <div>
         copyright@2021|Proficient
         <p>Designed by Sakhiyakauser Shalikbasha</p>
     </div>
        </div>
         
    )
}

export default Footer
