

//import React from 'react'
import './about.css'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FaBlackberry } from 'react-icons/fa';
import { blue, deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    color:'#002341',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div>
    <header className="headera">
      <div className="container">
        <div className="row">
    
          <p className="who"> 
          Who we are, Our Mission, Our Vision, Our Values & Our Goals</p>
  
              </div>
           
            </div>
      
      
 
      </header>
    
    <div className="bottom">
      <div className="bottomrighta">
   
      <h1 className="h1ab">
    ABOUT PROFICIENT

      </h1>



  

  
    <Timeline align="alternate">
      <TimelineItem >
        <TimelineOppositeContent >
          <Typography className="ti" variant="body2" color="textSecondary">
      
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="ti">
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Our Mission
            </Typography>
            <Typography>Proficient Accounting & Taxation services was established in May 2005. Since its inception the practice has experienced continued growth and currently consists of 2 partners both of whom are CPA’s.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="deepOrange">
        
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="ti">
          <Paper className="tp"elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Our Vision
            </Typography>
            <p className="tp"> We offer wide range of professional financial & taxation services including Tax Returns, Taxation Advice, Accountancy, Book-keeping, Business Set up, Incorporation of Companies, Home Loans, etc.</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent className="ti">
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
         Our Values
            </Typography>
            <Typography>Whether you are an individual needing your tax return done, a family business requiring accounting or bookkeeping services, small business or a medium to large enterprise, we can offer proactive solutions to help you reach your financial goals.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent className="ti">
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Our goals
            </Typography>
            <Typography>We have a wide and varied client base providing services to individuals and businesses in diverse industries and structures. These structures include companies, trusts and partnerships.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

    {/*  <p>
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
        <br/>
        <br/>
        We have a wide and varied client base providing services to individuals and businesses in diverse industries and structures. These structures include companies, trusts and partnerships.
    </p>*/}

</div>
</div>
</div>
  )
}

export default About

