import s from './Button.module.css';

const Button = ({onClick}) => {
    return (
        <button onClick={onClick} className={s.button}>
            Add task
        </button>
    )
};
export default Button;