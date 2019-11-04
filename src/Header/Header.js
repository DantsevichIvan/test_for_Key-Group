import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Header = (props) => {
    return (<header className={s.header}>
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/ /" activeClassName={s.activeLink}>Главная</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/posts" activeClassName={s.activeLink}>Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
            </div>
            {props.isAuth ?
                <div className={s.item}>
                    <NavLink to="/logout" activeClassName={s.activeLink}>LogOut</NavLink>
                </div>
                : null}
        </nav>
    </header>)
}

let mapDispatchToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapDispatchToProps)(Header);