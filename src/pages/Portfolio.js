import React from "react";
import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioAbout from '../components/PortfolioAbout';
import Countdown from '../components/Countdown';
import PortfolioProject from '../components/PortfolioProjects';
import '../components/style.css';

const Portfolio = () =>{

    return(

        <>
        <div className="spacer"></div>
            <PortfolioHeader />
        <div className="spacer"></div>
        <PortfolioAbout/>
        < Countdown />
        <div className="spacer"></div>
        < PortfolioProject/>
        
        </>
    );

}

export default Portfolio;