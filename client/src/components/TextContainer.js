import React from 'react';

const TextContainer = ( { containerClasses, header, headerClasses, text, textClasses, border } ) => {
    let cClass="";
    if(containerClasses){
        cClass=" "+containerClasses;
    }
    let hClass="";
    if(headerClasses){
        hClass=" "+headerClasses;
    }
    let tClass="";
    if(textClasses){
        tClass=" "+textClasses;
    }
    return (
        <div className={border ? "text-container borders"+cClass : "text-container"+cClass}>
            {header ? <div className={"text-container_header"+hClass}>{header}</div> : ""}
            {text ?  <article className={"text-container_text"+tClass}>{text}</article> : ""}
        </div>
    )
}


////////////////////////////////
//-- TEXT CONTAINER CLASSES --//
////////////////////////////////

// CONTAINER
//    Background: no-bkg, dark, light, dark-gradient
//    Box: padding, margin

// BORDERS
//    FX: shadow glow
//    thick, dark, shadow, glow

// HEADER:
//    dark, light, big, small, thick, thin, glow

// TEXT:
//    dark, light, dark-gradient


export default TextContainer;