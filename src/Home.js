import React from 'react';
import Upcoming_event_card from './Upcoming_event_card';
import Header from './Header';
import Work from './Work';
import Courses from './Courses';
import Past_events from './Past_events';

const Home = () => {
    return (
        <>
            <Header />
            <Work />
            <Courses />
            <Past_events />
        </>
    );
};

export default Home;