import React from "react";

const RandomQuote = ({ type, className }) => {

    const zen = [
        '"Zen Quote 01"',
        '"Zen Quote 02"',
        '"Zen Quote 03"'
    ];
    const locationError = [
        '"404 Quote 01"',
        '"404 Quote 02"',
        '"404 Quote 03"'
    ];
    const errorMessage = [
        '"Error Quote 01"',
        '"Error Quote 02"',
        '"Error Quote 03"'
    ];

    let output;
    
    if (type === "zen") {
        output = zen;
    } else if (type === "locationError") {
        output = locationError;
    } else {
        output = errorMessage;
    };
    
    let len = output.length
    let sel = Math.floor(Math.random()*len)
    let quote = output[sel]

    return (<div className={className}>{quote}</div>)
}

export default RandomQuote;