import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
        <div className="container footer-row">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-10 mx-auto d-flex flex-column justify-content-center align-items-center">
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-4">
                  <h2>About Us</h2>
                  <p>Dnyanarjan Education is mixture of Indian culture, spirituality with touch of latest technology and science. We develop kids in their education,value added qualities and help them to become a good human being.</p>
                  <div className="row">
                    <div className="col-4 mx-auto">
                    <a href="https://www.facebook.com/100002250758222/" target="_dnyanarjan">
                      <i class="fab fa-facebook-f fontawesome-style"></i></a>
                    </div>
                    <div className="col-4 mx-auto">
                    <a href="https://www.youtube.com/channel/UCzTDmVYhRD7iBIL1-s0wYOQ" target="_dnyanarjan">
                      <i class="fab fa-youtube fontawesome-style"></i></a>
                    </div>
                    <div className="col-4 mx-auto">
                      <a href="https://www.linkedin.com/company/dnyanarjan-education/" target="_dnyanarjan">
                      <i class="fab fa-linkedin-in fontawesome-style"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <h2>Quick Links</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/courses">Online Courses</a>
                    </li>
                    <li>
                      <a href="/offline_courses">Offline Courses</a>
                    </li>
                    <li>
                      <a href="/upcoming_events">Upcoming Events</a>
                    </li>
                    <li>
                      <a href="/all_past_events">Past Events</a>
                    </li>
                    <li>
                      <a href="/videos">Video Gallery</a>
                    </li>
                    <li>
                      <a href="/video_testimonials">Video Testimonials</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-4">
                  <h2>Contact Info</h2>
                  <ul>
                    <li><span><i class="fas fa-home"></i></span><span> D7/002, Annapurna nagar, Adharwadi, Kalyan (West), Thane, Maharashtra</span></li>
                    <li>
                        <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                        <span><a href="tel:9653205099" > 9653205099</a></span>
                    </li>
                    <li>
                        <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                        <span><a href="tel:8454084820" > 8454084820</a></span>
                    </li>
                    <li>
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <span><a href="mailto:dnyanarjaneducation@gmail.com;"> dnyanarjaneducation@gmail.com</a></span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 copyright">
                <p className="footer-main-hero-para text-center w-100">
                  Copyright @dnyanarjaneducation.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </>
    );
};

export default Footer;