import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
   
    return (
      <section id="contact">

      <div class="overlay"></div>

      <div class="row narrow section-intro" style={{padding: 1}}>
        <div class="col-twelve">
       
          <h1 style={{fontFamily: 'Source Sans Pro',textAlign:'center'}}>Get In Touch.</h1>

          <p style={{fontFamily: 'Source Sans Pro',textAlign:'center'}}class="lead">Feel free to contact us for any suggestions or complain below</p>
        </div>
      </div>
    

      <div class="row" style={{ marginTop:-1.5}}>
        <div class="col-md-3"></div>
        <div class="col-md-3" style={{ textAlign:'center'}}>
        <p style={{color: 'white',fontFamily: 'Source Sans Pro',fontSize:18}}>Email Us:</p>
          
          <h3 style={{color: 'white',fontFamily: 'Source Sans Pro'}}>
            <a style={{color: 'white'}}>Serviscohire@gmail.com</a>
          </h3>
          <p style={{color: 'white',fontFamily: 'Source Sans Pro',fontSize:18}}>WhatsApp/Telegram:</p>
          
          <h3 style={{color: 'white',fontFamily: 'Source Sans Pro'}}>
            <a style={{color: 'white'}}>+92-335-7216535</a>
          </h3>
          <h2 style={{color: 'white',fontFamily: 'Source Sans Pro'}}> Street No 3G, 3rd Rd, near Ptcl Office, G-10/4 Islamabad, Islamabad Capital Territory 44000, Pakistan, Pakistan
          </h2>
          
        </div>
        {/* <div class="col-md-4">
          <h1 style={{color: 'white', textAlign: 'center'}}>
            <a style={{textDecoration:'none'}} href="https://www.facebook.com/innoIIITr/">
              <i class="fa fa-facebook-square f-links"></i>
            </a>
            <a style={{textDecoration:'none'}} href="https://twitter.com/innoIIITr">
              <i class="fa fa-instagram f-links"></i>
            </a>
            <a style={{textDecoration:'none'}} href="https://www.instagram.com/inno.IIITr/">
              <i class="fa fa-twitter f-links"></i>
            </a>
          </h1>

        </div> */}

      </div>
    </section>
        );
  }
}