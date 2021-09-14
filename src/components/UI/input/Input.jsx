import style from './input.module.scss';

const MyInput = (props) => {
    return (
        <input className={style.myInput} {...props}/>
    )
}

export default MyInput;