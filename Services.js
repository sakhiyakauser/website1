import React from "react";
import'./services.css';
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    
    text:
     <p>
       We offer wide range of financial & taxation services including Tax Returns, Taxation Advice, Accounting, Book-keeping, Business Set up, Business Advisory Services, Business Take Over Services, Incorporation of Companies, Home Loans, etc.
<br/>


     </p>
  });
  const [state] = React.useState([
    {
      id: 1,
      
      heading: "Taxation Services",
      text:
      <p>
         Tax Returns Individuals, Sole Traders, Partnership, Companies, Trust etc
         <br/>
         <br/>
      - BAS & IAS
      <br/>
      - Tax Advise & Compliance
      <br/>
      <br/>
      - Tax Planning
      - Advise on Negative Gearing (Investment Property)
      - Advise on Capital Gain Tax
      - GST Compliance
      </p>
     
   
    },
    {
      id: 2,
      
      heading: "Accounting & Bookkeeping Services",
      text:
       <p>
  - Maintenance of Accounting Books
   - MYOB Set up
   - MYOB Support & Help
   - Processing Payroll as required - Weekly or Monthly
   - Back Office Services
   - Reconciliation work incl Bank, Customers, Suplliers etc
   - Internal Audit / Checks
   - Set up of Accounting & Other Management Services
       </p>
    },
    {
      id: 3,
      
      heading: "Business Consultancy Services",
      text:
        <p>
        - Preparation of Management Report as required by the Management
        - Business Set up & Business restructuring
        - Framing internal policies to run your business smoothly & efficiently
        - Business Take Over advice
        - Liasioning Services with Banks, Other Government Depts etc
        - Preparation of Reports / Documents as required by Banks
        </p>
    },
    {
      id: 4,
    
      heading: " Misc Services",
      text:
        <p>
         
   - Internal Audit
   - MYOB Software - Setup, Support & Help
   - Project Reports for Banks
   - Organizing Home Loans
   - Stock Take
        </p>
    },
    {
      
      heading: " Services to New Business",
      text:
      <p>
       
   - Incorporation of Companies
   - Incorporation of Trusts
   - Incorporation of SMSF
   - Obtaining ABN, TFN, GST Regn, PAYG Regn
   - Bookkeeping Services
      </p>
    },
    {
      id: 6,
      
      heading: "SEO Expert",
      text:
       <p>
         We take time to understand each client’s specific situation / requirements enabling us to deliver a totally focused and customised service.

We are committed to save money for our clients by adding value.
       </p>,
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
