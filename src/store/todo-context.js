import React from 'react';

const TodoContext = React.createContext(
    {
        todoList: [],
        addTodoItem: () => {},
        removeItem: () => {},
        checkItem: () => {},
        size: 0,
        setSize: () => {},
    }
)

export default TodoContext;