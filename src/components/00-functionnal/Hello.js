import React from 'react';

export const Hello = (props) => {
    return (
        <div>
            <h1>Hello Wishwas {props.name}</h1>
            {props.children}
        </div>
    )   
}
