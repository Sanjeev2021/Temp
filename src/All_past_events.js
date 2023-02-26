import React, { useState } from 'react';
import pasteventsapi from "./API/AllpasteventsApi";

const All_past_events = () => {
    const [eventDat, setServiceData] = useState(pasteventsapi);
    return (
        <>
            <section className="pastevents-main-container">
                <div className="container pastevents-container">
                <h1 className="main-heading text-center fw-bold">Past Events</h1>
                    <div className="row d-flex justify-content-center align-items-center">
                    {eventDat.map((curElem) => {
              const { id, event, info, number } = curElem;
              return (
                <>
                    <div className="col-12 col-lg-4 col-xxl-4 d-flex justify-content-center align-items-center">
                        <div className="pastevents_card m-3">
                            <div className="pe_face pe_face1">
                                <div className="content">
                                    <h2>{event}</h2>
                                    <p>{info}</p>
                                    <a href="/gallery">Know more...</a>
                                </div>
                            </div>
                            <div className="pe_face pe_face2">
                                <h2>{number}</h2>
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

export default All_past_events;