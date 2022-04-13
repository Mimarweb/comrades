import React from "react";
import Container from '@mui/material/Container';
import company from "../Assets/company.png";
import Item from "./ItemClient";
import "./style.css";
import "./responsive.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const Clients = () =>{
  return(


    <>
    <Container maxWidth="lg">
        <div className="projects">
            <div className="inner-projects">
                <h1><span>Our Clients</span></h1>
                <p>We take pride in our client reviews and in working with them to provide outstanding service.</p>
            </div>
        </div>
        <div className="App">
            <Carousel breakPoints={breakPoints}>
                <Item className="partiner-img">
                    <img src={ company } alt="company"/>
                </Item>
                <Item className="partiner-img">
                    <img src={ company } alt="company"/>
                </Item>
                <Item className="partiner-img">
                    <img src={ company } alt="company"/>
                </Item>
                <Item className="partiner-img">
                    <img src={ company } alt="company"/>
                </Item>
            </Carousel>
        </div>
    </Container>
    </>




        // <React.Fragment>
        //     <CssBaseline/>
        //     <Container maxWidth="lg">
        //         <div className="projects">
        //             <div className="inner-projects">
        //                 <h1><span>Clients</span></h1>
        //                 <p>Sbcne incs dicbsdnoi nsdisk bsbs icbsdnci  u sdnc bsbs icbsdnci  sdncihwvbwn iuabsbcne incs dicbsdnoi nsdisk bsbs sdnc <br/>
        //                  bsbs icbsdnci  u sdncihwvbwn iuabsbcne incs</p>
        //                  <div className="service-cards">
        //                      <Grid container spacing={3}>
        //                         <Grid item sm={3}>
        //                             <div className="client-card">
        //                                 <div className="client-card-img">
                                           
        //                                 </div>
        //                                 <p> client 1</p>
        //                             </div>
        //                         </Grid>
        //                         <Grid item sm={3}>
        //                             <div className="client-card">
        //                                 <div className="client-card-img">
                                           
        //                                 </div>
        //                                 <p>client 2</p>
        //                             </div>
        //                         </Grid>
        //                         <Grid item sm={3}>
        //                             <div className="client-card">
        //                                 <div className="client-card-img">
                                           
        //                                 </div>
        //                                 <p>client 3</p>
        //                             </div>
        //                         </Grid>
        //                         <Grid item sm={3}>
        //                             <div className="client-card">
        //                                 <div className="client-card-img">
                                           
        //                                 </div>
        //                                 <p>client 3</p>
        //                             </div>
        //                         </Grid>
                                
        //                      </Grid>
                             
        //                  </div>
        //             </div>  
        //         </div>
                
        //     </Container>

        // </React.Fragment>

    );
}

export default Clients;