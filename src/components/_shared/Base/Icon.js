import React from 'react';

function Icon(props) {
    return (
        <span className={props.className}>
            <img src={props.src} alt='digikala-code-challenge' />
        </span>
    );
}

export default Icon;