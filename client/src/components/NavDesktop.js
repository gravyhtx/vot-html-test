import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from 'react-materialize';
import Auth from '../utils/auth';
import BlockiesIdenticon from "./BlockiesIdenticon";

// import BlockiesIdenticon from 'blockies/react-component';


const NavDesktop = ( userData ) => {

    const fingerprint = <Icon className="avatar">fingerprint</Icon>
    const blockie = <Icon className="avatar">fingerprint</Icon>

    const account = Auth.loggedIn ? "/account" : "/login";
    // const blockie = <BlockiesIdenticon className="blockie-nav" opts={{seed: "foobafdsafr"}}/>
    // window.addEventListener('wheel', checkScrollDirection);
    
    // let wheelDelta = (e) => {return e.wheelDelta}
    // let deltaY = (e) => {return e.deltaY}
    // let moveNav = false;
    // let scrollCount = 0;


    // function checkScrollDirection(e) {
    //     if (checkScrollDirectionIsUp(e) && scrollCount < 20) {
    //         moveNav = true;
    //         console.log("moveNav", "up");
            
    //     } else {
    //         moveNav = false;
    //         console.log("moveNav", "down");
    //     }
    // }

    
    // function checkScrollDirectionIsUp(e) {
    //     if (e.wheelDelta) {
    //         return wheelDelta(e) > 0;
    //     }
    //     return deltaY(e) < 0;
    // }
    console.log(Auth.loggedIn())

    return (
        <div className="fixed-action-btn toolbar desktop">
            <Button
                className="btn-floating btn-large action-nav waves-effect waves-light pulse z-depth-1"
                fab={{
                    direction: 'top',
                    toolbarEnabled: true
                }}
                floating
                icon={fingerprint}
                large
                node="button"
            >
                <Link to={account}>
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
            </Button>
        </div>
        
    );
}

export default NavDesktop;