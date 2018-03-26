import React from 'react';

function Todo(props)
{
    return (
        <div>
            <p>
              { props.list }  
            </p>
        </div>
    );
}

export default Todo;