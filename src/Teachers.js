import React, {useState} from 'react';
import teachersapi from './API/TeachersApi';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Teachers = () => {
    const [teachersData, setServiceData] = useState(teachersapi);
    return (
        <>
        <section className="teachers-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Our Team
          </h1>
          <div className="row d-flex justify-content-center align-items-center">
            {teachersData.map((curElem) => {
              const { id, img, title, info, position } = curElem;
              return (
                <>
                <div className="col-10 col-md-4 col-lg-3 col-xxl-3 d-flex flex-column justify-content-center align-items-center teachers-container-subdiv" >
                            <div className="imgbox">
                                <figure>
                                    <LazyLoadImage src={img} className="img-fluid"/>
                                </figure>
                            </div>
                        <div className="content">
                            <h2 className="sub-heading pb-0">{title}</h2>
                            <h3 className="position pb-0">{position}</h3>
                            <p className="profession mt-0 mb-0 pb-0">{info}</p>
                        </div>
                        </div>
                    {/* </div>
                </div> */}
                </>
              );
            })}
          </div>
        </div>
      </section>
        </>
    );
};

export default Teachers;