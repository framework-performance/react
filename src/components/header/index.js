import React from "react";

import {Link} from 'react-router'

function Header() {
    return (
        <div>
            <h1>React performance</h1>
            <nav>
                <Link to="/simple" activeClassName="active">Simple</Link>
                <Link to="/fast" activeClassName="active">Fast</Link>
            </nav>
        </div>
    );
}


export default Header;