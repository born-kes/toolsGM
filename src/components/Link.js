import * as React from "react";

const Link = ({children, to}) =>{

    return <a href={`#${to}`}>{children}={to}</a>
};
export default Link ;