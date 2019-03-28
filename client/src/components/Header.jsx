import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
return(
    <nav>
        <div className="homeButton">Icon For Home: Links to Weekly Budget</div>
        <div className="spendingButton">Icon For Spending? Links to </div>
        <div className="settingsButton">Icon For Settings: Links to Register page</div>
    </nav>
)
}

export default Header;
