import React from 'react';

import './navbar.css';

const Navbar = ({ active, click }) => {
    return (
        <div className="navbar-div">
            <div className="brand-name">Tutor</div>
            <div className="links">
                <span className={`link ${active === 'home' ? 'active' : ''}`} id="home" onClick={click}>Home</span>
                <span className={`link ${active === 'howItWorks' ? 'active' : ''}`} id="howItWorks" onClick={click}>How It Works</span>
                <span className={`link ${active === 'pricing' ? 'active' : ''}`} id="pricing" onClick={click}>Pricing</span>
                <span className={`link ${active === 'faq' ? 'active' : ''}`} id="faq" onClick={click}>Faq</span>
                <span className={`link ${active === 'signIn' ? 'active' : ''}`} id="signIn" onClick={click}>Sign In</span>
            </div>
        </div>
    );
}

export default Navbar;