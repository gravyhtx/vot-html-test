import React, {Component} from "react";
import { Button, Icon } from 'react-materialize';

export default class NavDesktop extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = { value: true };
    // }
    render() {

        window.addEventListener('wheel', checkScrollDirection);
        let wheelDelta = (e) => {return e.wheelDelta}
        let deltaY = (e) => {return e.deltaY}
        let moveNav = false;

        function checkScrollDirection(e) {
            if (checkScrollDirectionIsUp(e)) {;
                moveNav = true;
                console.log("moveNav", moveNav);
            } else {;
                moveNav = false
                console.log("moveNav", moveNav);
            }
        }
        
        function checkScrollDirectionIsUp(e) {
            if (e.wheelDelta) {
                return wheelDelta(e) > 0;
            }
            return deltaY(e) < 0;
        }

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
}

