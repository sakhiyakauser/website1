import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import'./contact.css'
const Contact = () => {
  return (
    <div className="contact">
      <h1 className="h1contact">
        Contact
      </h1>
      <div className="containerc">

    
      <div className="containerl">
        
                <img src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" />
              </div>
             
             <div className="containerr">
        <p> Avinash Kumar Jhawar <br/>
        <br/>  
3/154-156, Bridge Road,
<br>
</br>
WESTMEAD, NSW - 2145<br></br>
P: 02-9687 5373<br></br>
M: 0425 330 826</p> 


<br/>
<br/>

<p> Avinash Kumar Jhawar <br/>
        <br/>  
3/154-156, Bridge Road,
<br>
</br>
WESTMEAD, NSW - 2145<br></br>
P: 02-9687 5373<br></br>
M: 0425 330 826</p> 
             </div>
             </div>
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
          
        
      

      <iframe className="map"
  
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAuyTPJ0HSFxm36T-wDO7goWWA00PnXHGI
    &q= 3/154-156, Bridge Road,WESTMEAD, NSW - 2145">
</iframe>

    </div>

  );
};

export default Contact;
