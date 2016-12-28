import React from "react";

import {Link} from 'react-router'

function Header() {
    return (
        <div>
            <h1>React performance</h1>
            <nav>
                <Link to="/tree" activeClassName="active">Tree</Link>
            </nav>
        </div>
    );
}


export default Header;