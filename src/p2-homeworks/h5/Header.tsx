import React from "react"
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

function Header() {
    return (
        <div>
            <nav>
                <NavLink to="/pre-junior" className={s.link}>
                    preJunior
                </NavLink>
                <NavLink to="/junior" className={s.link}>
                    Junior
                </NavLink>
                <NavLink to="/junior-plus" className={s.link}>
                    JuniorPlus
                </NavLink>
            </nav>
        </div>
    )
}

export default Header
