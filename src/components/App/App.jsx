import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../../redux/tasks/operations.js';
import TaskForm from '../TaskForm/TaskForm.jsx';
import AppBar from '../AppBar/AppBar.jsx';
import List from '../List/List.jsx';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  
  return (
    <div className={s.container}>
      <AppBar />
      <TaskForm />
      {loading && !error && <b>Request in progress</b>}
      <List />
    </div>
  )
}

export default App;
