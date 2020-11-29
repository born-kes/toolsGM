import React, {Component} from 'react';
import Link from "../Link";
// import * as PropTypes from "prop-types";
    import PropTypes from 'prop-types';

class Nav extends Component {
    render() {
        let {value} = this.props;
        let LiElements = value.map(({text,href}, nr) => (
                <li key={nr}>
                    <Link to={href}>{text}</Link>
                </li>
            )
        );

        return <div><ul>{LiElements}</ul></div>
    }
}

Nav.propTypes = {value: PropTypes.array};
Nav.defaultProps = {value:[{text:'xy', href:'abc'}]};

export default Nav;