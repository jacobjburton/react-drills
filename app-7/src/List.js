import React from 'react';
import Todo from './Todo.js'

function List(props)
{
    let newList = props.tasks.map((e,i) =>
    {
        return (
            <Todo key={i} task={e}/>
        );    
    });

    return (
        <div>
            {newList}
        </div>
    );
}

export default List;