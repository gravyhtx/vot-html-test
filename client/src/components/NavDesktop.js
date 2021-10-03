import React from "react";
import { Button, Icon } from 'react-materialize';

function NavDesktop() {
  return (
    <div className="fixed-action-btn toolbar">
        <Button
            className="btn-floating btn-large action-nav waves-effect waves-light pulse z-depth-1"
            fab={{
                direction: 'top',
                toolbarEnabled: true
            }}
            floating
            icon={<Icon className="avatar">fingerprint</Icon>}
            large
            node="button"
        >
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
        </Button>
    </div>
    
  );
}

export default NavDesktop;