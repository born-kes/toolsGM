import React from "react";
import './index.css';

const NavBar = () => {
    return <div>
            <input type="checkbox" name="toggleMode" id="toggleMode" />
            <label htmlFor="toggleMode" />
            <main />
        </div>;
}

export default NavBar;