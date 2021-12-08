import React from 'react';
import { Link } from "react-router-dom";

const NotificationBar = ({ text }) =>  {
    return (
        <Link className="nav-link" to="/login">
            <div className="notify">
                {text}
            </div>
        </Link>
    )
}
export default NotificationBar;