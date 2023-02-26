import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Navbar = () => {
  const [show, setShow] = useState(false);

    return (
        <>
        <section className="navbar-bg">
          <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="/"><LazyLoadImage src={process.env.PUBLIC_URL + '/images/logo.png'} className="img-fluid"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show": ""}`}>
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center align-items-center">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="main-active" aria-current="page" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="main-active" exact to="/courses">
                    Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="main-active" exact to="/teachers">
                    Our Team
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="main-active" exact to="/gallery">
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="main-active" exact to="/testimonials">
                  Testimonials
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex justify-content-center m-md-2 align-items-center">
              <Link  to="/contact">
                <button className="btn btn-style">
                  Contact
                </button>
              </Link>
              </form>
              <form className="d-flex justify-content-center m-md-2 align-items-center">
              <Link to="/paymentdetails">
                <button className="btn  btn-style">
                Payment details
                </button>
              </Link>
              </form>
    </div>
  </div>
</nav>
</section>
        </>
    );
};

export default Navbar;