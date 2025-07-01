import s from './ListItem.module.css';
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/operations.js";
import { toggleCompleted } from "../../redux/toggle/operations.js";

const ListItem = ({task}) => {
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
            <p className={s.text}>{task.text}</p>
            <button className={s.button} onClick={handleDelete}>

            </button>
        </div>
    )
};
export default ListItem;