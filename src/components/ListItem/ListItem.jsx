import s from './ListItem.module.css';
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/tasks/operations.js";

const ListItem = ({task}) => {
    const {title, description} = task;
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTask(task.id));

    const handleToggle = () => dispatch(toggleCompleted(task));

    return (
        <div className={s.wrapper}>
            <input 
                type="checkbox"    
                className={s.checkbox}
                checked={task.completed}
                onChange={handleToggle}
            />
            <p className={s.text}>{title}</p>
            <p>{description}</p>
            <button className={s.button} onClick={handleDelete}>

            </button>
        </div>
    )
};
export default ListItem;