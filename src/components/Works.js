import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="works">
      <div className="row">
        <div className="twelve columns collapsed">
        <h1 style={{fontSize:30,fontWeight:'bold',color:'black'}}>How its Work</h1>
          <div id="works-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.works && resumeData.works.map((item)=>{
              return(
                <div style={{borderRadius:20}} className="columns works-item">
                 
                  <div style={{borderRadius:20}}className="item-wrap">
                  {/* <h6 style={{textAlign:'center'}}>{item.heading}</h6> */}
                    <a style={{borderRadius:20}}href="#modal-01">
                    
                      <img style={{borderRadius:20,height:150,width:250}} src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="works-item-meta">
                         <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}