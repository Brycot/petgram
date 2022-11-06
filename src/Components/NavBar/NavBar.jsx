import React from "react";
import { Nav, NavLink } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
function NavBar() {
    return (
        <Nav>
            <NavLink end to="/">
                <MdHome />
            </NavLink>
            <NavLink end to="/favs">
                <MdFavoriteBorder />
            </NavLink>
            <NavLink end to="/user">
                <MdPersonOutline />
            </NavLink>
        </Nav>
    );
}

export { NavBar };
