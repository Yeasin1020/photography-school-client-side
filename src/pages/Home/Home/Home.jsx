import React from 'react';
import Slider from '../Slider/Slider';
import PhotographyPopularCard from '../../PhotographyPopularCard/PhotographyPopularCard';
import TopInstructor from '../../Instructor/TopInstructor';

const Home = () => {
	return (
		<div>
			<Slider></Slider>
			<PhotographyPopularCard></PhotographyPopularCard>
			<TopInstructor></TopInstructor>
		</div>
	);
};

export default Home;