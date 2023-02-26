import React, {useState} from 'react';
import testimonialapi from './API/VideoTestimonialsApi';
import ReactPlayer from "react-player";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Teachers = () => {
    const [teachersData, setServiceData] = useState(testimonialapi);
    return (
      <LazyLoadComponent>
        <>
        <section className="video_testimonial-container">
        <div className="container video_testimonial-container">
          {/* <h1 className="main-heading text-center fw-bold">
            Testimonials
          </h1> */}
          {/* <ReactPlayer url="/images/videoT_1.mp4"
                height='400px'
                width='auto'
                controls='true'/> */}

        <div className="row d-flex justify-content-center align-items-center">
            {teachersData.map((curElem) => {
              const { id, video, title, teacher } = curElem;
              return (
                <>
                <div className="col-10 col-lg-4 col-xxl-4 d-flex justify-content-center align-items-center" >
                    <div className="row d-flex  justify-content-center align-items-center ">
                        <div className="col-12 col-lg-12 col-xxl-12 d-flex flex-column  justify-content-center align-items-center ">
                                <ReactPlayer className="test_video" height='250px' width='250px' url={`/images/${video}`} controls='true'/>
                            <h2 className="v_sub-heading pb-0">{title}</h2>
                            <p className="instructor_vt mt-0 mb-0 pb-0">{teacher}</p>
                        </div>
                     </div>
                </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
        </>
        </LazyLoadComponent>
    );
};

export default Teachers;