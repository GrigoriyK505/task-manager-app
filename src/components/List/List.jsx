import s from './List.module.css';
import { useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem.jsx";

const getVisibleTasks = (tasks, statusFilter) => {
    switch(statusFilter) {
        case 'active':
            return tasks.filter((task) => !task.completed);
        case 'completed':
            return tasks.filter((task) => task.completed);
        default:
            return tasks;
    }
};

const List = () => {
    const tasks = useSelector((state) => state.tasks.items);
    const statusFilter = useSelector((state) => state.filters.status);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);

    return (
        <ul className={s.list}>
            {visibleTasks.map((task) => (
                <li className={s.listItem} key={task.id}>
                    <ListItem task={task}/>
                </li>
            ))}
        </ul>
    );
};

export default List;