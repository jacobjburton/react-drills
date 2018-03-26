import React from 'react';
import Todo from './Todo.js';


function List(props)
{
    var list = props.tasks.map((e, i) => {
        return (
            <Todo key={i} list={e}/>
        );
    });

    return (
        <div>{ list }</div>
    );
} 

export default List;