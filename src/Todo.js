import React from 'react';

const Todo =({text,index,deleteTodo}) => {
    return <h4 onClick={()=> deleteTodo(index)}>{text}</h4>;

}

export default Todo ;