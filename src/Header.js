import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <header>
        <section className="container main-hero-container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6 d-flex justify-content-center flex-column align-items-start order-lg-1 order-2 right">
              <h1 className="display-1">
              Grow your child with </h1><h1 className="display-2">DNYANARJAN EDUCATION.
              </h1>
              <p className="main-hero-para">
              We enrich our students with culture and value education.
              </p>
              {/* <h3>Know more about Dnyanarjan Education</h3>
              <a href="/images/Dnyanarjan_intro.mp4">
              <i className="far fa-play-circle"></i></a> */}
              <Link to="/upcoming_events">
                <button className="btn btn-style-more">
                View Upcoming Events
                </button>
              </Link>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 order-lg-2 order-1 d-flex justify-content-center align-items-center main-herosection-images">
            <LazyLoadImage src={process.env.PUBLIC_URL + '/images/logo.png'} className="img-fluid main-hero-img1"/>
            <LazyLoadImage src={process.env.PUBLIC_URL + '/images/vidya.png'} className="img-fluid main-hero-img2"/>
            </div>
          </div>
        </section>
      </header>
      </>
    );
};

export default Header;