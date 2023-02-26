import React, { useEffect, useState } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import images from './API/GalleryApi';
import {Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = () => {
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
            <section className="gallery-tabs">
            <div className="container">
                    <div className="row">
                <div className="menu-tab tags col-12 d-flex justify-content-center align-items-center ">
			        <div className="tags d-flex justify-content-center align-items-center">
				        <TagButton name="All" tagActive={tag === 'All' ? true : false} handleSetTag={setTag} />
				        <TagButton name="Drawing/Craft" tagActive={tag === 'Drawing/Craft' ? true : false} handleSetTag={setTag} />
				        {/* <TagButton name="Craft" tagActive={tag === 'Craft' ? true : false} handleSetTag={setTag} /> */}
                        <TagButton name="Bharatnatyam" tagActive={tag === 'Bharatnatyam' ? true : false} handleSetTag={setTag} />
						<TagButton name="Singing" tagActive={tag === 'Singing' ? true : false} handleSetTag={setTag} />
						<TagButton name="Trek/Camp" tagActive={tag === 'Trek/Camp' ? true : false} handleSetTag={setTag} />
				        <TagButton name="Others" tagActive={tag === 'Others' ? true : false} handleSetTag={setTag} />
						<Link to="/videos">
							<button class="btn  btn-select">
                  				Videos
                			</button>
						</Link>
			        </div>
                </div>
                </div>
                </div>

			<SRLWrapper>
				<div className="container">
                    <div className="row">
					    {filteredImages.map(image => (
                            <div className="col-12  col-lg-4 col-xxl-3 work-container-subdiv d-flex flex-column justify-content-center align-items-center">
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								        <LazyLoadImage className="image" src={`/images/${image.imageName}`} alt="" />
							 </a>
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

export default Gallery;