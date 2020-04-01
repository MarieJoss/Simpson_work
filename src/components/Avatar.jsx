import React from 'react';

const Avatar = ({image, firstName, lastName})=>{
    return <div>
        <img src={image}/>
        <h1>{firstName}</h1>
        <h2>{lastName}</h2>
    </div>
}

export default Avatar;
