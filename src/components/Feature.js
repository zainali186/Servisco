import React, { Component } from 'react';
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faAngleDoubleUp,faHeart,faLaptopCode,faBusinessTime,faPersonBooth,faCode,faCodeBranch,faMarker,faCalendarTimes,faPeopleCarry} from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline,VerticalTimelineElement
} from "react-vertical-timeline-component";
import ReactCardFlip from "react-card-flip";
import 'react-vertical-timeline-component/style.min.css';
export default  class Feature extends Component {
  render() {
    
    return (
      <section id="timeline">
      <div className="timeline">
        <h1 style={{textAlign:'center', marginTop:'15px',marginBottom:'15px',fontSize:'50px',color:'white'}}> Key Feauture</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: "#000000", color: "#50a209" }}
            icon={<FontAwesomeIcon icon={faLaptopCode}
             />}
          >
            <h1>Quality deliverables</h1>
     
            <p>The Team will provide higher quality of work</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: "#000000", color: "#50a209" }}
            icon={<FontAwesomeIcon icon={faBusinessTime} />}
          >
            <h1>24/7 Availibility</h1>
            
            <p>Hassle free 24/7 Available for your Clients</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" 2022"
            iconStyle={{ background: "#000000", color: "#50a209" }}
            icon={<FontAwesomeIcon icon={faPersonBooth} />}
          >
            <h1>Customer satisfaction</h1>
           
            <p>Customer Satisfication is top priority</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="  2022"
            iconStyle={{ background: "#000000", color: "#50a209" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h1>Development </h1>
         
            <p>Web and Mobile Applicaiton(IOS & android) </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" 2022"
            iconStyle={{ background: "#000000", color: "#50a209" }}
            icon={<FontAwesomeIcon icon={faCodeBranch} />}
          >
            <h1>Efficiency & Productivity.</h1>
            
            <p>Provide the efficiency to our client in our top priority</p>
          </VerticalTimelineElement>

         
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: "#000000", color: "#50a209" }}
            icon={<FontAwesomeIcon icon={faMarker} />}
          >
            <h1>A+ Grade</h1>
       
            <p>Clients will get A+ Grade in their Acadmics</p>
          </VerticalTimelineElement>

         

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: "#000000", color: "#50a209" }}
            icon={<FontAwesomeIcon icon={faCalendarTimes} />}
          >
            <h1>On-Time Delivery</h1>
         
            <p>Our Team will provide on time delivery.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: "#000000", color: "#50a209" }}
            icon={<FontAwesomeIcon icon={faPeopleCarry} />}
          >
            <h1>Online Tutoring</h1>
         
            <p>Our Team provide services of online tutoring</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "#000000", color: "#50a209" }}
            icon={<FontAwesomeIcon icon={faAngleDoubleUp} />}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      
      </section>
     
    );
  }
}