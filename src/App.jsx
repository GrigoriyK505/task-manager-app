import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SearchBox from './components/SearchBox/SearchBox.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div>
      <SearchBox />
    </div>
  )
}

export default App
