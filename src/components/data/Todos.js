import React, { useState, useEffect, useRef } from 'react';
import style from './Todos.module.scss';
import { get, getAll, add } from './GetTodos';
import { Link, useParams, useHistory } from 'react-router-dom';

function Todos() {
    const [data, setData] = useState({});
    const [todos, setTodos] = useState([]);
    let { filter } = useParams();
    let history = useHistory();
    const myRef = useRef();

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        const title = evt.target.title.value;
        const newObj = {
            title,
            completed: false,
            userId: 11,
            id: 205,
        };

        if (document.querySelector('input').value) {
            add({todo: newObj}).then(() => {
                setTodos([...todos, newObj]);
                document.querySelector('input').value = '';
            });
            getAll().then((serverData) => {
                setTodos(serverData);
            });
        }
    };

    useEffect(() => {
        get().then((serverData) => {
            setData(serverData);
        });
    }, []);

    useEffect(() => {
        getAll().then((serverData) => {
            setTodos(serverData);
        });
    }, []);

    useEffect(() => {
        myRef.current.value = filter || '';
    }, [filter]);

    const onFilterTitleChange = () => {
        history.push(`/todos/filter/${myRef.current.value}`);
    }

    return <div>
        <h1>
            Todos
        </h1>
        <form className={style.formTodo} onSubmit={onFormSubmit}>
            <input className={style.inputTodo} type='text' placeholder='&#9997; Enter new todo title' name="title" />
            <button className={style.buttonTodo} type='submit'>Submit</button>
            <input className={style.titleFilter} type='text' ref={myRef} placeholder='&#128269; Enter filter value' onChange={onFilterTitleChange} />
        </form>
        <h1>Data:</h1> <div className='todoTitle'>{data.title}</div>
        <h1>Title:</h1>
        {todos.filter(todo =>  filter
                ? todo.title.includes(filter)
                : true)
            .map((todo, idx) => <div key={idx} className='todoTitle'>
            <h3>{todo.userId}</h3>
            {todo.title}
            <Link className={style.pan} to={`/todos/${todo.uniqueId}${filter && '/' + filter || ''}`}>&#171;Edit</Link>
        </div>).length
        ? todos.filter(todo =>  filter
            ? todo.title.includes(filter)
            : true)
        .map((todo, idx) => <div key={idx} className='todoTitle'>
        <h3>{todo.userId}</h3>
        {todo.title}
        <Link className={style.pan} to={`/todos/${todo.uniqueId}${filter && '/' + filter || ''}`}>&#171;Edit</Link>
    </div>)
        : <h1>🔍 No matches found!</h1>
        }
    </div>;
}

export default Todos;
