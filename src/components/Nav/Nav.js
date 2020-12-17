import React, {Component} from 'react';
import Link from "../Link";
import * as PropTypes from "prop-types";
    // import PropTypes from 'prop-types';
import "./Nav.css";
import GetIcon from "../../Utils/icon";


class Nav extends Component {

    handler = ()=> {
        navigator.vibrate([1000, 100, 100, 300,500, 50, 100, 100, 100, 800]);
    }
    render() {
        let {value} = this.props;
        let LiElements = value.map(({text,href,icon=''}, nr) => (
                // <li key={nr}>
            <div className="nav__link" onClick={this.handler.bind(this)}>
                    <Link to={href} className="nav__link nav__link--active">
                        <GetIcon name={icon} className={`nav__icon`} />
                        <span className="nav__text">{text}</span>
                    </Link>
            </div>
                // </li>
            )
        );


        return <div id={`cssmenu`} className={`mobile-bottom-nav ${this.props.className}`} >
            {/*<ul className={`mobile-bottom-nav__item-content`}>{LiElements}</ul>*/}

            {LiElements}
        </div>
    }
}

Nav.propTypes = {value: PropTypes.array};
Nav.defaultProps = {value:[{text:'xy', href:'abc'}]};

export default Nav;