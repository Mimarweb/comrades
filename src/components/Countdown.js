import React from "react";
import { Grid } from "@material-ui/core";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CountUp from 'react-countup';
import "./responsive.css";
import VisibilitySensor from 'react-visibility-sensor';


const Countdown = () =>{
    return(
        <React.Fragment>
            <CssBaseline/>
            <div className="spacer"></div>
            <div className="countdown-cont">
                <Container maxWidth="lg">
                    <Grid Container className='countdown'>
                        <Grid item sm={4} xs={4} className="count">
                        <h1> <CountUp end={439} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                            +</h1>
                            <p>Happy Clients</p>
                        </Grid>
                        <Grid item sm={4} xs={4} className="count">
                        <h1> <CountUp end={934} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                            +</h1>
                            <p>Completed Projects</p>
                        </Grid>
                        <Grid item sm={4} xs={4} className="count">
                        <h1> <CountUp end={738} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                            +</h1>
                            <p>Ongoing Projects</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            
        </React.Fragment>
    )
}

export default Countdown;