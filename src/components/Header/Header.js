import React from 'react';
import logo from '../../assets/logo.png';
import classes from './Header.module.css';
import {Link, NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className={classes.Header}>
            <div className={classes.Container}>
                <Link to="/" className={classes.Logo}>
                    <img src={logo} alt='logo'/>
                </Link>
                <div className={classes.Nav}>
                    <NavLink to="/favorites" activeClassName={classes.Active}>Фавориты</NavLink>
                    <NavLink to="/addPokemon" activeClassName={classes.Active}>Добавить покемона</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
