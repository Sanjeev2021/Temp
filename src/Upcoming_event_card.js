import React, {useState} from 'react';
import eventsapi from './API/Upcoming_eventsAPi';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Upcoming_event_card = () => {
    const [eventDat, setServiceData] = useState(eventsapi);
    return (
        <>
        <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Upcoming Events
          </h1>
          <div className="row d-flex justify-content-center align-items-center">
            {eventDat.map((curElem) => {
              const { id, title,image, info } = curElem;
              return (
                <>
                <div className="col-10 col-lg-4 col-xxl-4 work-container-subdiv d-flex  flex-column justify-content-center align-items-center card-upcoming-event" key={id}>
                    <div className="row d-flex  justify-content-center align-items-center ">
                        <div className="col-11 col-lg-5 col-xxl-5 date d-flex  justify-content-center align-items-center">
                          {/* crello for images */}
                            <LazyLoadImage src={image} className="img-fluid"/>
                        </div>
                        <div className="col-11 col-lg-7 col-xxl-7 data d-flex flex-column  justify-content-center align-items-center mt-3 pt-5 pb-5">
                            <h2 className="sub-heading pb-0">{title}</h2>
                            <p className="main-hero-para mt-0 mb-0 pb-0">{info}</p>
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
    );
};

export default Upcoming_event_card;