import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.css'

const Header = (props) => (
    <nav className={[classes.header ,'navbar' ,'navbar-dark' ,'bg-dark'].join(' ')} style={{overflowX: 'hidden'}}>
        <div className="container">
            <div className={classes.brand}>
                <i className={[classes.brandicon, 'fa fa-sun-o fa-2x'].join(' ')}></i>
                <span className={classes.brandtext}>{props.title}</span>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Weather'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;