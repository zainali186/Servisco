import { faBold } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Us</h2>
               <p style= {{textAlign:'justify' }}>
            Servisco is an independent Pakistan Based online platform. Operating Since 2018 – Servisco has been in profit since the beginning. Our Team in divide in two group such as academic & Professional work. 

            </p>
            <p style= {{textAlign:'justify' }}>
            In Academic side, we provide services to College, Bachelor and Master level students in their studies like we teach student about things that they want to learn, Help them in their projects and in their assignments. The subjects that we provide academic services are related to Business, any programming language, Computer Science, Project Management, IT, Mathematics, Case studies related to anything. In our services, we offer different packages like individual assignments and project, Complete class handling for 4 months without attendance that include all the assignments, quizzes, projects and exam, Complete class handling for 4 months with attendance that include all the assignments, quizzes, projects and exam and attendance in class. In our team, we have a lot of experts of writing that handle any type of writing, also help you in thesis and research projects, Blogpost and Articles. In our academic services, we offered A+ grade in assignment, project, and final grade in class. Our research projects and writing are plagiarism free, and we deliver our work on time.


            </p>
            <p style= {{textAlign:'justify' }}>
              In professional work, A close-knit team of 350+ designers Programmers System analysts and marketing executives. We seize each new opportunity and leverage it to the enhancement of overall development procedures. We develop mobile application and web application according to your choice. 
            </p>
          

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span style= {{fontWeight:'bold' }}>{resumeData.name}</span>
                         
                    <br></br>
                    <span style= {{fontWeight:'bold' }}>Email:</span>
                    <br></br>
                    <span>Serviscohire@gmail.com</span>
                    <br></br>
                    <span style= {{fontWeight:'bold' }}>WhatsApp/Telegram :</span>
                    <br></br>
                    <span>+92-335-7216535</span>
                    <br></br>
                    <span style= {{fontWeight:'bold' }}>Address :</span>
                     <br></br>
       						   <span
                            style= {{textAlign:'justify' }}>
                            Street No 3G, 3rd Rd, near Ptcl Office, G-10/4 Islamabad, Islamabad Capital Territory 44000, Pakistan
                    </span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}