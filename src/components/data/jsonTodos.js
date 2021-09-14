import React from 'react';
import style from './Todos.module.scss';

function TodoList({ todo }) {
    return (
        <li className={style.todoLi}>
            <h3>{todo.userId}</h3>
            "{todo.title}"
        </li>
    );
}

export default TodoList;
