import s from './List.module.css';
import { useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem.jsx";
import {selectFilteredTasks} from '../../redux/tasks/selectors.js'

const List = () => {
    const tasks = useSelector(selectFilteredTasks);

    return (
        <ul className={s.list}>
            {tasks.map(task => (
                <li className={s.listItem} key={task._id}>
                    <ListItem task={task}/>
                </li>
            ))}
        </ul>
    );
};

export default List;