import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import './home.css'
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
const Banner = () => {
  const [state] = React.useState({
    title: "Accounting & Taxation Services",
    text:
      "Accounting Firm \
       suitable for all business ",
   
  });
  return (
    <div className="homepage">
    <header className="header">
      <div className="container">
        
        
          
            < div className="header__content">
           
            
              <div className="tt">
           {/*<marquee direction="left">*/}   
          <h1>{state.title}</h1>
                <p>{state.text}</p>
                <marquee direction="left">
                <h4 className="tt1">
                We handle all your accounting and tax, so that you can concentrate on your business</h4> 
                </marquee>
             
          </div>
        
            
          </div>
         
      
      </div>
    </header>
    <div className="bottom">
      <div className="bt">
      <div className="bottomright">
   
      <h1 className="h1w">
     WELCOME TO PROFICIENT

      </h1>
      <p>
              Proficient Accounting & Taxation Services work effectively for the clients to solve their regular & complex financial and accountancy challenges.
<br/>
<br/>
        We offer wide range of professional financial & taxation services including Tax Returns, Taxation Advice, Accountancy, Book-keeping, Business Set up, Incorporation of Companies, Home Loans, etc.
<br/>
<br/>
        Whether you are an individual needing your tax return done, a family business requiring accounting or bookkeeping services, small business or a medium to large enterprise, we can offer proactive solutions to help you reach your financial goals.
        <br/>
        <br/>


        We are committed to form close partnerships with our clients. In this way we can understand your unique situation.
<br/>
<br/>
        Our aim is to help our clients to concentrate and focus their energy to develop their business.
      </p>

</div>

<div className="bottomleft">

</div>
</div>





<div className="container1">
    <div className="heading">
      
    <h1 >OUR VALUES</h1>
    </div>
<div className="row"> 
  <div className="card">
    <div className="card-header">
      <h1>
      Quality 
      </h1>
    </div>
    <div  className="card-body">
      <p>
      We are committed to adding value to our clients with proactive business, tax & financial planning solutions
      </p>
    </div>
  </div>


  <div className="card">
    <div className="card-header">
      <h1>
      Personalised
      </h1>
    </div>
    <div  className="card-body">
      <p>
      We take time to understand our clients enabling us to deliver a totally focused and customised service

      </p>
    </div>
  </div>



  <div className="card">
    <div className="card-header">
      <h1>
      Value Addition 
      </h1>
    </div>
    <div  className="card-body">
      <p>
      We are committed to save money for our clients by providing value added services
      </p>
    </div>
  </div>




  <div className="card">
    <div className="card-header">
      <h1>
      Commitment
      </h1>
    </div>
    <div  className="card-body">
      <p>
      Once we take up the job, we are totally committed to it.
Confidentiality
Information of the client will be kept confidential.
      </p>
    </div>
  </div>
</div>




    </div> 























  {/* <Card  className="root" variant="outlined">
      <CardContent >
        <Typography className="title" color="black" gutterBottom>
        Quality Service
        </Typography>
        <Typography className="tpara">
        We are committed to adding value to our clients with proactive business, tax & financial planning solutions
        </Typography>
       
      </CardContent>
     
    </Card>
 


    <Card className="root" variant="outlined">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
        Personalised
        </Typography>
        <Typography className="tpara">
        We take time to understand our clients enabling us to deliver a totally focused and customised service
        </Typography>
        <Typography className="pos" color="textSecondary">
      
      </Typography>
      </CardContent>
     
    </Card>
 




    <Card className="root" variant="outlined">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
        Value Addition
        </Typography>
        <Typography className="tpara">
        We are committed to save money for our clients by providing value added services
        </Typography>
        
      </CardContent>
     
    </Card>
 
    <Card className="root" variant="outlined">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
        Commitment
        </Typography>
        <Typography className="tpara">
        Once we take up the job, we are totally committed to it.
        </Typography>
        
      </CardContent>
      
  </Card>*/}
 


    </div>
     
      </div>
   
    
  );
};


export default Banner;
