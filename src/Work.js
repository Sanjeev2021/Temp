import React, {useState} from 'react';
import workapi from './API/WorkApi';

const Work = () => {
    const [workData, setWorkData] = useState(workapi);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">Dnyanarjan Education was started in 2020 in the month of June.</h1>
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
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

export default Work;