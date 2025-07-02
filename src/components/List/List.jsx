import s from './List.module.css';
import ListItem from "../ListItem/ListItem.jsx";
import { useSelector } from "react-redux";

const List = () => {
  const tasks = useSelector(state => state.tasks.items) ?? [];
  const completedFilter = useSelector(state => state.filters.completed);

  const filteredTasks = tasks.filter(task => {
    if (completedFilter === null) return true;
    return task.completed === completedFilter;
  });

  return (
    <ul className={s.list}>
      {filteredTasks.map(task => (
        <li className={s.listItem} key={task._id}>
          <ListItem task={task} />
        </li>
      ))}
    </ul>
  );
};

export default List;