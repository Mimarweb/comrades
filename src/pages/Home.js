import React from "react";
import HomeSlider from '../components/HomeSlider';
import HomeAbout from '../components/HomeAbout';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Achievments from '../components/Achievments';
import Countdown from '../components/Countdown';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import '../components/style.css';

const Home = () =>{

    return(

        <>
        <HomeSlider />
        <HomeAbout />
        <div className="spacer"></div>
        <Services />
        <div className="spacer"></div>
        <Projects />
        <Countdown />
        <Achievments />
        <Testimonials />
        <Clients />
        
        </>
    );

}

export default Home;