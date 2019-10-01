import React from 'react';
import '../TodoComponents/Todo.css';

const TodoForm = props => {
    // console.log(props);
    return (
        <div>
            <input onChange={props.handleEventChange} type="text" placeholder="Add to list..."></input>
            <button onClick={props.handleSubmit}>Add to do</button>
            <button onClick={props.handleClear}>Clear completed</button>
        </div>
    );
};

export default TodoForm; 