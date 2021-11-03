import React from 'react';
import './Sideheader.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BugReportIcon from '@mui/icons-material/BugReport';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';



function Sideheader() {
    return (
        <div className="side-menu">
            <div className="top-section">
                <div className="titlee">
                    <p style={{color: 'white'}}>IzuTracker</p>
                    <div className="toggleside">
                    <ArrowBackIcon style={{color: 'white'}}/>
                    </div>
                </div>
            </div>
            <div className="divider">
            </div>
            <div className="navlinks">
            <Nav className="flex-column">
            <Nav.Link className="subnavlink"><Link className="subnavlink" to="/Dashboard"><DashboardIcon /> Dashboard</Link></Nav.Link>
            <Nav.Link className="subnavlink"><Link className="subnavlink" to="/Form"><BugReportIcon /> Raise Issue</Link></Nav.Link>
            <Nav.Link className="subnavlink"><Link className="subnavlink" to="/Trackpage"><AssessmentIcon /> Track Issue</Link></Nav.Link>
            <Nav.Link className="subnavlink"><Link className="subnavlink" to="/Profilepage"><PersonIcon /> Profile</Link></Nav.Link>
            <Nav.Link className="subnavlink"><Link className="subnavlink" to="/"><LogoutIcon /> Log Out</Link></Nav.Link> 
</Nav>
</div>
            
        </div>
    )
}

export default Sideheader;
