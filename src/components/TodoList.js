import React from 'react';
import Todo from './Todo'

const TodoList = ({todos,setTodos,todoFilter}) => {
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                {todoFilter.map((todo)=>(
                    <Todo
                        todo={todo} 
                        key={todo.id} 
                        text={todo.text} 
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;