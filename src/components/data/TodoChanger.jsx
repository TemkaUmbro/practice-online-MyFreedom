import React from 'react';
import style from './Todos.module.scss'

const TodoChanger = ({children, visible, setVisible}) => {
    const todoClass = [style.todoChanger]

    if (visible) {
        todoClass.push(style.active);
    }

    return (
        <div className={todoClass.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.todoChangerContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default TodoChanger;