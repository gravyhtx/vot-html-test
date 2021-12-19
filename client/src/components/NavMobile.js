import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from 'react-materialize';

const NavDesktop = () => {
    return (
        <div className="mobile-nav mobile">
            <Link to="/login">
            <Button
                className="btn-floating navigation-link"
                floating
                icon={<Icon>person</Icon>}
                node="button"
            />
            </Link>
            <Link to="/products">
            <Button
                className="btn-floating navigation-link"
                floating
                icon={<Icon>remove_red_eye</Icon>}
                node="button"
            />
            </Link>
            <Link to="/faq">
            <Button
                className="btn-floating navigation-link"
                floating
                icon={<Icon>all_inclusive</Icon>}
                node="button"
            />
            </Link>
            <Link to="/cart">
            <Button
                className="btn-floating navigation-link"
                floating
                icon={<Icon>shopping_cart</Icon>}
                node="button"
            />
            </Link>
        </div>
    );
}

export default NavDesktop;