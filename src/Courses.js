import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import coursesapi from './API/CoursesApi';

const Courses = () => {
            const [eventDat, setServiceData] = useState(coursesapi);
    return (
        <>
        <Helmet>
          <title>Sanskar Varg and various Arts and Technology Online Classes</title>
          <meta name="description" content="Sanskar Varg, Coding, Chess, Arts, Maths-Science, Phonics and various Classes in Online mode at Dnyanarjan Education."></meta>
          <meta name="keywords" content="Sanskar Varg, Art, Dnyanarjan Drawing Class, Drawing class, Drawing class online, Drawing class offline, Singing class, Classical singing class, Coding class, Python programming class, Bharatnatyam class, Classical singing class, Phonics class, Chess class, Craft class, Warli Painting class, Quilling class, Dnyanarjan Education"></meta>
        </Helmet>
        <section className="course-main-container">
        <div className="container course-container">
          <h1 className="main-heading text-center fw-bold">
            Online Courses
          </h1>
          <div className="row d-flex justify-content-center  align-items-center">
            {eventDat.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                <div className="col-10 col-lg-4 col-xxl-4 d-flex flex-column justify-content-center align-items-center course-card">
                            <div className="circle">
                              <i class={`fontawesome-style ${logo}`}></i>
                                {/* <i className="fas fa-chess icon"></i> */}
                                <h2>{title}</h2>
                            </div>
                            <div className="course-content">
                                <p>{info}.</p>
                                <a href="/testimonials">View feedbacks</a>
                            </div>
                </div>
                 </>
              );
            })}
          </div>

          <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center align-items-center">
            <Link to="/offline_courses">
                <button className="btn  btn-style-more">
                View Offline Courses
                </button>
              </Link>
              </div>
              </div>
        </div>
      </section>
        </>
    );
};

export default Courses;