import { Grid, Container } from "@material-ui/core";
import "./header.css";
import "./responsive.css";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import LOGO from "../Assets/logo.png";
import LOGO2 from "../Assets/logo2.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileNav from '../components/MobileNav';


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [navBar, setnavBar] = useState(false);

    const hamburgerIcon =  <MenuIcon className={navBar ? 'icon active' : 'icon'} onClick={() => setOpenMenu(!openMenu)} />
    const closeIcon =  <CloseIcon className={navBar ? 'icon active' : 'icon'} onClick={() => setOpenMenu(!openMenu)} />

    const changeBg = () =>{
        if(window.scrollY >= 100){
            setnavBar(true);
        }
        else{
            setnavBar(false);
        }
    };

    window.addEventListener('scroll', changeBg);
    
    return(

       
        <Grid container className={navBar ? 'nav-head active' : 'nav-head'}>
            <Container maxWidth="lg">
            <Grid container className="m-flex">
                <Grid item sm={1}></Grid>
                <Grid item sm={4} className="leftmenu-grid">
                    <div className="leftmenu">
                        
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/services">Services</Link>

                    </div>
                </Grid>
                <Grid item sm={2}>
                    <div className="logo">

                        <Link to="/"><img src={LOGO} alt="LOGO" /></Link>
                        
                    </div>
                    <div className="logo-m">

                        <Link to="/"><img src={LOGO2} alt="LOGO" /></Link>
                        
                    </div>
                </Grid>
                <Grid item sm={4} className="rightmenu-grid">
                    <div className="rightmenu">

                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/teams">Team</Link>
                        <Link to="/contact">Contact</Link>

                    </div>
                </Grid>
                <Grid item sm={1}></Grid>
                
                <Grid item sm={10} className="hamburger" justifyContent="end">
                    <div className="hamburger">
                           {openMenu ? closeIcon : hamburgerIcon}
                           
                    </div>
                    
                </Grid>
                    {openMenu && <MobileNav />}
                

            </Grid>
            </Container>
        </Grid>
       
    );
}


export default Header;