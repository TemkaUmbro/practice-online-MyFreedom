import React, { useEffect, useState } from 'react';
import style from './Todos.module.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import TodoChanger from './TodoChanger';
import MyInput from '../UI/input/Input';

function Todo({ history, match, getById, update, remove }) {
    const {params: {todo: todoParam, filter: titleFilter}} = match;
    const [todo, setTodo] = useState({});
    const [chengeTodo, setChengeTodo] = useState(false)

    useEffect(() => {
        getById(todoParam).then(todo => {
            setTodo(todo);
        });
    }, [todoParam, getById]);

    const btnAddNewPostValue = (e) => {
        e.preventDefault();
        update({uniqueId: todoParam, completed: todo.completed, title: todo.title, userId: todo.userId});
        setChengeTodo(false);
    }

    const goToTodos =() => {
        history.push(`/todos${titleFilter && '/filter/' + titleFilter || ''}`)
    }
    const goToFeedbacks =() => {
        history.push('/feedbacks')
    }
    const onCompletedChange = (e) => {
        setTodo({...todo, completed: e.currentTarget.value});
    }
    const onTitleChange = (e) => {
        setTodo({...todo, title: e.currentTarget.value});
    }
    const onUserIdChange = (e) => {
        setTodo({...todo, userId: e.currentTarget.value});
    }
    const onRemoveBtnClick = async () => {
        await remove({ uniqueId: todoParam});
        goToTodos();
    }

    return (
        <div className={style.todoLi}>
            <h1>Todo
                <Link className={style.pan} to='#' onClick={setChengeTodo}>&#128395;</Link>
                <Link style={{position: 'absolute', right: '15px'}} to='#' onClick={onRemoveBtnClick}>&#10060;</Link>
            </h1>
            <h3>
                {titleFilter && <>Filter param: {titleFilter}</>}
            </h3>

            <div>
                Completed: {todo.completed?.toString()}
            </div>
            <div>
                Id: {todo.id}
            </div>
            <div>
                Title: {todo.title}
            </div>
            <div>
                UserId: {todo.userId}
            </div>
                <Link className={style.link} to='#' onClick={goToTodos}>Back to Todos &#10550;</Link>
                <Link className={style.link} to='#' onClick={goToFeedbacks}>Go to Feedbacks &#10550;</Link>
                <TodoChanger visible={chengeTodo} setVisible={setChengeTodo}>
                    <h1>Edit Todo:</h1>
                    <form className={style.todoForm} type='submit'>
                        Completed ( true / false ):
                        <MyInput style={{padding: '5px'}} type="text" value={todo.completed?.toString() || ''} onChange={onCompletedChange} />
                        Title:
                        <MyInput style={{padding: '5px'}} type="text" value={todo.title || ''} onChange={onTitleChange} />
                        User Id:
                        <MyInput style={{padding: '5px'}} type="text" value={todo.userId || ''}
                        onChange={onUserIdChange} />
                        <button type='submit' className={style.todoSaver} onClick={btnAddNewPostValue}>&#128190; Update</button>
                    </form>
                </TodoChanger>
        </div>
    );
}

export default withRouter(Todo);
