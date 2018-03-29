import React from 'react';

function Image(props)
{
    return(
        <div>
            <img src={props.myImage} alt="THIS"/>
        </div>
    );
}

export default Image;