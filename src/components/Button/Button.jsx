import s from './Button.module.css';

const Button = ({onClick}) => {
    return (
        <button onClick={onClick} className={s.button}>
            All
        </button>
    )
};
export default Button;