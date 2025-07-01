import s from './TaskForm.module.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/operations.js';
import Button from '../Button/Button.jsx';

const TaskForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        dispatch(addTask(e.target.elements.text.value));
        form.reset();
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input
                name="text"
                type="text"
                className={s.field}
                placeholder="Enter task text..."
            />
            <Button type="submit">Add task</Button>
        </form>
    );
}

export default TaskForm;