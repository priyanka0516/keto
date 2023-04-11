import React, {  useEffect, useState, useRef} from 'react';
import './style.css';
import './responsive.css';
import Iframe from 'react-iframe';
// import Carousel from 'react-bootstrap/Carousel';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from 'react-slick';
function Home (){ 
   const [name, setName] = useState('');
   const [email,setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');
   const [nav1, setNav1] = useState();
   const [nav2, setNav2] = useState();
   const slider1 = useRef();
   const slider2 = useRef();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleChange = event => {
   setMessage(event.target.value);

   // 👇️ this is the input field itself
   console.log(event.target);

   // 👇️ this is the new value of the input
   console.log(event.target.value);
 };
   return(
   <>
    <div className="banner_main">
    <Slider {...settings}>
          <div className="">
          <img
          className="d-block w-100"src={require('./../images/banner1.jpg')}
          alt="First slide"
        />
          </div>
          <div>
          <img
          className="d-block w-100"
          src={require('./../images/banner2.jpg')}
          alt="Second slide"
        />
          </div>
          <div>
          <img
          className="d-block w-100"
          src={require('./../images/banner3.jpg')}
          alt="Third slide"
        />
          {/* <img src={require('./../images/bima_black.png')}/> */}
          </div>
        </Slider>
    <div className="booking_ocline">
           <div className="container">
              <div className="row">
                 <div className="col-md-5">
                    <div className="book_room">
                       <h1>Book a Room Online</h1>
                       <form className="book_now">
                          <div className="row">
                          <div className="col-md-12">
                             <div className="col-md-4">
                                <span>Arrival</span>
                                {/* <img class="date_cua" src={require('./../images/date.png')} alt="dateimage"/> */}
                                <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy"/>
                             </div>
                             <div className="col-md-4">
                                <span>Departure</span>
                                {/* <img class="date_cua" src={require('./../images/date.png')}  alt="dateimage"/> */}
                                <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy"/>
                             </div>
                             <div className="col-md-4">
                                <button className="book_btn">Book Now</button>
                             </div>
                             </div>
                          </div>
                       </form>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        </div>
             <div className="about">
             <div className="container">
                <div className="row">
                   <div className="col-md-5">
                      <div className="titlepage">
                         <h2>About Us</h2>
                         <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. </p>
                         <a className="read_more" href="/#"> Read More</a>
                      </div>
                   </div>
                   <div className="col-md-7">
                      <div className="about_img">
                        <img src={require('./../images/about.png')} alt="#"/>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div  className="our_room">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Our Room</h2>
                     <p>Lorem Ipsum available, but the majority have suffered </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                        <img  src={require('./../images/room1.jpg')} alt="#"/>
                     </div>
                     <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                       <img src={require('./../images/room2.jpg')} alt="#"/>
                     </div>
                     <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover" className="room">
                     <div className="room_img">
                      <img  src={require('./../images/room3.jpg')} alt="#"/>
                     </div>
                     <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover" className="room">
                     <div className="room_img">
                       <img  src={require('./../images/room4.jpg')} alt="#"/>
                     </div>
                     <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                        <img  src={require('./../images/room5.jpg')} alt="#"/>
                     </div>
                     <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                        <img src={require('./../images/room6.jpg')} alt="#"/>
                     </div>
                     <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div  className="gallery">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>gallery</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                  <img src={require('./../images/gallery1.jpg')}alt="#"/>
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
      <div className="blog">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
               <div className="titlepage">
                     <h2>Blog</h2>
                     <p>Lorem Ipsum available, but the majority have suffered </p>
                  </div>
            </div>
            </div>        
            <div className="row">     
           <Slider asNavFor={nav1}
        ref={slider2 => setNav2(slider2)}
        slidesToShow={3}
        autoplay={true}
        swipeToSlide={true}
        style={{width:'100%'}}
        focusOnSelect={true}>
         <div>
         <div className="col-md-12 col-md-offset-2">
                  <div className="blog_box" >
                     <div className="blog_img">
                        <img src={require('./../images/blog1.jpg')} alt="#" />
                     </div>
                     <div className="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk</span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div> 
        </div>
        <div>
        <div className="col-md-12 col-md-offset-2">
                  <div className="blog_box" >
                     <div className="blog_img">
                        <img src={require('./../images/blog1.jpg')} alt="#" />
                     </div>
                     <div className="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk</span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div> 
        </div>
        <div>
        <div className="col-md-12 col-md-offset-2">
                  <div className="blog_box" >
                     <div className="blog_img">
                        <img src={require('./../images/blog1.jpg')} alt="#" />
                     </div>
                     <div className="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk</span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div> 
        </div>
        <div>
        <div className="col-md-12 col-md-offset-2">
                  <div className="blog_box" >
                     <div className="blog_img">
                        <img src={require('./../images/blog1.jpg')} alt="#" />
                     </div>
                     <div className="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk</span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div> 
        </div>
        <div>
        <div className="col-md-12 col-md-offset-2">
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
        </div>
        <div>
        <div className="col-md-12 col-md-offset-2">
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
             {/* <div className="col-md-12 col-md-offset-2">
                  <div className="blog_box" >
                     <div className="blog_img">
                        <img src={require('./../images/blog1.jpg')} alt="#" />
                     </div>
                     <div className="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk</span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div> 
               <div className="col-md-12 col-md-offset-2">
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
               <div className="col-md-12 col-md-offset-2">
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
               </div> */}
               </Slider> 
            </div>
         </div>
      </div>
      <div className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Contact Us</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" value={name} onChange={handleChange}/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" value={email}  onChange={handleChange}/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone Number" type="type"  onChange={handleChange} value={phone}/>                          
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea"  name="Message" placeholder="Message" onChange={handleChange} value={message}>Message</textarea>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="col-md-8">
                  <div className="map_main">
                     <div className="map-responsive">                 
                     <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.188577567174!2d85.7408903143954!3d20.29246011788201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907e655555555%3A0x3f6fe26d44d5028b!2sQUOTUS%20SOFTWARE%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1669873461046!5m2!1sen!2sin"      
                      width="100%"
                      id="myId"
                      height="500px"
                      className="myClassname"
                    />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>
 )
}
export default Home;