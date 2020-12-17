import React from "react";
import './index.css';

const NavBar = () => {
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }

    const handlerChange = (el) => {

        if(el.target.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')
        }
    }

    return (
        <div className={'toggle-container'}>
            <input type="checkbox" id="toggleMode" onChange={handlerChange} />
            <label htmlFor="toggleMode" />
            <div />
        </div>
    );
}

export default NavBar;