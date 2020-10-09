import React from 'react';

function Image(props) {
    return (
        <div className={props.className}>
            <img src={props.src} alt='digikala-code-challenge' />
        </div>
    );
}

export default Image;