import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../../redux/tasks/operations.js';
import TaskForm from '../TaskForm/TaskForm.jsx';
import List from '../List/List.jsx';
import StatusFilter from '../StatusFilter/StatusFilter.jsx';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  
  return (
    <div className={s.container}>
      <h2 className={s.title}>TODO LIST</h2>
      <section className={s.form}>
        <TaskForm />
        <StatusFilter />
      </section>

      {loading && !error && <b>Request in progress...</b>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && <List />}
    </div>
  )
}

export default App;
