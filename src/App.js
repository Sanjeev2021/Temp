import React, {Suspense, lazy} from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const Home = lazy(()=> import('./Home'))
const Courses = lazy(()=> import('./Courses'))
const Contact = lazy(()=> import('./Contact'))
const Gallery = lazy(()=> import('./Gallery'))
const Navbar = lazy(()=> import('./Navbar'))
const Teachers = lazy(()=> import('./Teachers'))
const Payment = lazy(()=> import('./Payment'))
const Videos = lazy(()=> import('./Videos'))
const Testimonals = lazy(()=> import('./Testimonals'))
const VideoTestimonials = lazy(()=> import('./VideoTestimonials'))
const Footer = lazy(()=> import('./Footer'))
const Upcoming_events = lazy(()=> import('./Upcoming_event_card'))
const Past_events = lazy(()=> import('./Past_events'))
const All_Past_Events = lazy(()=> import('./All_past_events'))
const Offline_couses = lazy(()=> import('./Offline_couses'))

const App = () => {
    return (

        <>
        <Helmet>
          <title>Dnyanarjan Education- Sanskar Varg, Arts, Technology Coaching</title>
          <meta name="description" content="Sanskar Varg, Coding, Chess, Arts, Maths-Science, Phonics and various classes in online and offline mode at Dnyanarjan Education."/>
          <meta name="keywords" content="Sanskar Varg, Art, Dnyanarjan Drawing Class, Drawing class, Drawing class online, Drawing class offline, Singing class, Classical singing class, Coding class, Python programming class, Bharatnatyam class, Classical singing class, Phonics class, Chess class, Craft class, Warli Painting class, Quilling class, Dnyanarjan Education"></meta>
        </Helmet>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />

          {/*switch is used to show the pages which we type in url in search bar */}
          <Switch>
            {/* <Route exact path="/" component={Header} /> */}
            <Route exact path="/" component={Home} />
            {/* <Home /> */}
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/upcoming_events" component={Upcoming_events} />
            <Route exact path="/past_events" component={Past_events} />
            <Route exact path="/gallery" component={Gallery} />
            {/* exact is used because before words it identifies "/" and goes to home page */}
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/teachers" component={Teachers} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/paymentdetails" component={Payment} />
            <Route exact path="/testimonials" component={Testimonals} />
            <Route exact path="/video_testimonials" component={VideoTestimonials} />
            <Route exact path="/all_past_events" component={All_Past_Events} />
            <Route exact path="/offline_courses" component={Offline_couses} />
            {/* any other page other than mentioned ones directly send to home page without error */}
            <Redirect to="/" />
          </Switch>
          <Footer />
          </Suspense>
        </>
    );
};

export default App;