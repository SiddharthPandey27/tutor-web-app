import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <h1 className="footer-text">Hello, Parent</h1>
            <h2 className="footer-subtext">Boost your child's brain with an online live class. <b>Get a FREE Intro LIVE Class Now!</b></h2>
            <div>
                <input type="text" placeholder="Enter Child's Age" value="" className="input-box" />
                <input type="text" placeholder="Enter Child's Mobile Number" value="" className="input-box" />
                <button className="button enroll">ENROLL NOW</button>
            </div>
        </div>
    );
}

export default Footer;