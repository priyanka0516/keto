import React, { Component } from 'react';
import './style.css';
import './responsive.css';
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return(
    <div className="footer">
    <div className="container">
       <div className="row">
          <div className=" col-md-4">
             <h3>Contact US</h3>
             <ul className="conta">
                <li><i className="fa fa-map-marker" aria-hidden="true"></i> Address</li>
                <li><i className="fa fa-mobile" aria-hidden="true"></i> +01 1234569540</li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="/#"> demo@gmail.com</a></li>
             </ul>
          </div>
          <div className="col-md-4">
             <h3>Menu Link</h3>
             <ul className="link_menu">
                <li className="active"><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/room" className="nav-link">Our room</Link></li>
                <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
                <li><Link to="/blog" className="nav-link">Blog</Link></li>
                <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
             </ul>
          </div>
          <div className="col-md-4">
             <h3>News letter</h3>
             <form className="bottom_form">
                <input className="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                <button className="sub_btn">subscribe</button>
             </form>
             <ul className="social_icon">
                <li><a href="/#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="/#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="/#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="/#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
             </ul>
          </div>
       </div>
    </div>
    <div className="copyright">
       <div className="container">
          <div className="row">
             <div className="col-md-10 offset-md-1">  
                <p>
                  © Copyright All Rights Reserved.<a href="/#"></a>
                </p>
             </div>
          </div>
       </div>
    </div>
 </div>
 )
}
}
export default Footer;