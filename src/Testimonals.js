import React, { useEffect, useState } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import images from './API/TestimonialApi';
import {Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Testimonals = () => {
	const [tag, setTag] = useState('All');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'All' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

	return (
		<>
            <section className="testimonial-tabs ">
            <div className="container">
                    <div className="row  d-flex justify-content-center align-items-center ">
                <div className="menu-tab tags col-12 d-flex justify-content-center align-items-center ">
			        <div className="tags d-flex justify-content-center align-items-center">
				        <TagButton name="All" tagActive={tag === 'All' ? true : false} handleSetTag={setTag} />
				        <TagButton name="Drawing/Craft" tagActive={tag === 'Drawing/Craft' ? true : false} handleSetTag={setTag} />
				        <TagButton name="Coding" tagActive={tag === 'Coding' ? true : false} handleSetTag={setTag} />
				        <TagButton name="Sanskar Varga" tagActive={tag === 'Sanskar Varga' ? true : false} handleSetTag={setTag} />
                <TagButton name="Singing" tagActive={tag === 'Singing' ? true : false} handleSetTag={setTag} />
                <Link to="/video_testimonials">
							<button class="btn  btn-select">
                  				Video Testimonals
                			</button>
						</Link>
			        </div>
                </div>
                </div>
                </div>

			<SRLWrapper>
				<div className="container">
                    <div className="row  d-flex justify-content-center align-items-center">
					    {filteredImages.map(image => (
							<div className="col-12 col-lg-4 col-xxl-4 testimonial d-flex flex-column justify-content-center align-items-center">
                <div className="card">
      <i className="fas fa-quote-left quote"></i>
      <p>{image.review}</p>
      <div className="content">
        <div className="info">
          <div className="name">{image.name}</div>
          <div className="tag">{image.tag}</div>
        </div>
        <div className="photo">
			<LazyLoadImage className="image" src={`/images/${image.imageName}`} alt="" />
        </div>
      </div>
    </div>
            </div>
					    ))}
                    </div>
				</div>
			</SRLWrapper>
            </section>
		</>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null} btn btn-select`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Testimonals;