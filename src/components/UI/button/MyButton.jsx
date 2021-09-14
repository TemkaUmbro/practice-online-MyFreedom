import style from './MyButton.module.scss';

const MyButton = ({ children, ...props}) => {
    return (
        <button { ...props } className={style.myButton}>
            { children }
        </button>
    )
}

export default MyButton;