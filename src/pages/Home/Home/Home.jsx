import React from 'react';
import Slider from '../Slider/Slider';
import PhotographyPopularCard from '../../PhotographyPopularCard/PhotographyPopularCard';
import TopInstructor from '../../Instructor/TopInstructor';
import ExtraSection from '../../ExtraSection/ExtraSection';
import { useEffect } from 'react';

const Home = () => {
	useEffect(()=> {
        document.title = "Photography-School || Home"
      },[])
	return (
		<div>
			<Slider></Slider>
			<PhotographyPopularCard></PhotographyPopularCard>
			<ExtraSection></ExtraSection>
			<TopInstructor></TopInstructor>
		</div>
	);
};

export default Home;