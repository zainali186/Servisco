import React, { Component } from 'react';
export default class Benefits extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <section id="benefits">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
            <h1><span>Client Benefits</span></h1>
            </div>
            <h1 style={{fontSize:24,fontWeight:'bold',color:'white'}}>Benefit Offered</h1>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  
                  {
                    resumeData.benefits && resumeData.benefits.map((item)=>{
                      console.log(item.description)
                      return(
                        <li>
                          <blockquote>
                            <p>
                            {item.description}
                            </p>
                            <cite style={{fontSize:14}}>{item.name}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> 
            </div> 
          </div> 
        </div>  
      </section>
        );
  }
}