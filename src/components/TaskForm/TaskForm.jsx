import s from './TaskForm.module.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/operations.js';
import Button from '../Button/Button.jsx';

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.elements.title.value.trim();
    const description = form.elements.description.value.trim();

    if (!title) return;

    dispatch(addTask({
      title,
      description,
      completed: false
    }));

    form.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        className={s.field}
        placeholder="Enter task title..."
        required
      />
      <textarea
        name="description"
        className={s.field}
        placeholder="Enter task description..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;