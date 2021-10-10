import React from 'react';
import Pic from '../src/Pictures/landpic.png';
import './Landing.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div>
            <div className=" container section1">
                <div className="row">
           <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <h1 className="landingtitle">TRACK IT</h1>
            <div className="buttonstyl">
            <Button className="buttonland" variant="warning"><Link to="/Register">REGISTER NOW</Link></Button>
            </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
        <img className="Landingimg" src= {Pic} />
        </div>
        </div>
           </div> 
        </div>
    )
}

export default Landing;
