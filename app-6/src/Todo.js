import React from 'react';

function Todo(props)
{
    return (
        <div>
            <p>
              { props.tasks }  
            </p>
        </div>
    );
}

export default Todo;