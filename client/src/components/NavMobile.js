import React from "react";
import { Button, Icon } from 'react-materialize';

const NavDesktop = () => {
    return (
        <div className="mobile-nav mobile">
            <Button
                className="btn-floating navigation-link"
                floating
                icon={<Icon>person</Icon>}
                node="button"
            />
            <Button
                className="btn-floating navigation-link"
                floating
                icon={<Icon>remove_red_eye</Icon>}
                node="button"
            />
            <Button
                className="btn-floating navigation-link"
                floating
                icon={<Icon>all_inclusive</Icon>}
                node="button"
            />
            <Button
                className="btn-floating navigation-link"
                floating
                icon={<Icon>shopping_cart</Icon>}
                node="button"
            />
        </div>
    );
}

export default NavDesktop;