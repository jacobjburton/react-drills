import React from 'react';

function Image(props)
{
    return (
        <div>
            <img src={props.displayImage} alt=""/>
        </div>
    )
}

export default Image;