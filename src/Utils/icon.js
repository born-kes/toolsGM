import React from "react";
import './icon.css';

const GetIcon = ({name, ClassName=''}) => {
    return <i className={`gg-${name} nav__icon ${ClassName}`}></i>
};
export default GetIcon;