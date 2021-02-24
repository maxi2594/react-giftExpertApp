import React from 'react';

const GiftGridItem = ({url, title}) => (

    <div className='card animate__animated animate__fadeIn__delay-5s'>
        <img src={ url } alt={ title }></img>
        <p> { title }</p>
    </div>
)

export default GiftGridItem;