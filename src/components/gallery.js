import React, { Component } from 'react';
import './style.css';
import './responsive.css';
class Gallery extends Component {
  render() {
    return(
      <>
       <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                    <h2>gallery</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
  
      <div  className="gallery">
         <div className="container">
           
            <div className="row">
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                    <img src={require('./../images/gallery1.jpg')} alt="#"/>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                    <img src={require('./../images/gallery2.jpg')} alt="#"/>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                  <img src={require('./../images/gallery3.jpg')} alt="#"/>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                  <img src={require('./../images/gallery4.jpg')} alt="#"/>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                  <img src={require('./../images/gallery5.jpg')} alt="#"/>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                  <img src={require('./../images/gallery6.jpg')} alt="#"/>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                  <img src={require('./../images/gallery7.jpg')} alt="#"/>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                  <img src={require('./../images/gallery8.jpg')} alt="#"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
     </>
 )
}
}
export default Gallery;