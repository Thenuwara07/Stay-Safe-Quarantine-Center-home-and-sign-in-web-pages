import React from 'react'
import logo from './logo.png';
import './NavBar.css'
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <div className="div-nav-bar">
            <div className="navBarLeft">
                <img className="img-logo" src={logo} alt="site logo" />
                <div id="homeImgContainer" ><Link to="/" className="link"><img className="homeIcon" src="https://vectorified.com/images/home-icon-white-2.png" alt="" /></Link></div>
            </div>
            <div className="navBarRight">
                <div className="navBarItem"><b><Link to="/adminpanel" className="link"> Our Center</Link></b></div>
                <div className="navBarItem"><b><Link to="/staffpanel" className="link">Packages</Link></b></div>
                <div className="navBarItem"><b><Link to="/contactus" className="link">Contact Us</Link></b></div>
                <div className="navBarItem"><b><Link to="/Sign_in_profile" className="link">Sign-In</Link></b></div>
            </div>
        </div>
    );
}
export default NavBar;