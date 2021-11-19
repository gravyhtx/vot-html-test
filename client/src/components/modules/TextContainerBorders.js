import  React from 'react';

const TextContainerBorders = ( { header, headerClass, text, textClass} ) => {
    return (
        <div className="text-contaier-borders">
            <div className={headerClass}>{header}</div>
            <article className={textClass}>{text}</article>
        </div>
    )
}

export default TextContainerBorders;

