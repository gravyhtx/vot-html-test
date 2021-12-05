import  React from 'react';

const ImageContainer = ( { containerClasses, imgClasses, description, src } ) => {
    let cClass="";
    if(containerClasses){
        cClass=" "+containerClasses;
    }
    let iClass="";
    if(imgClasses){
        iClass=" "+imgClasses;
    }
    return (
        <div className={"image-container"+cClass}>
            <img className={"image-class"+iClass} alt={description} src={src} />
        </div>
    )
}

export default ImageContainer;