import React, { Component } from 'react';
import './style.css';
import './responsive.css';
class Blog extends Component {
  render() {
    return(
      <>
      <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     <h2>Blog</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="blog">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">                   
                     <p className="margin_0">Lorem Ipsum available, but the majority have suffered </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="blog_box">
                     <div className="blog_img">
                     <img src={require('./../images/blog1.jpg')} alt="#"/>
                     </div>
                     <div className="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk </span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="blog_box">
                     <div className="blog_img">
                     <img src={require('./../images/blog2.jpg')} alt="#"/>
                     </div>
                     <div className="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk </span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="blog_box">
                     <div className="blog_img">
                       <img src={require('./../images/blog3.jpg')} alt="#"/>
                     </div>
                     <div className="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk </span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     </>
 )
}
}
export default Blog;