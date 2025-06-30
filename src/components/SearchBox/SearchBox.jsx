import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    return (
        <div className={s.container}>
            <input 
                type="text"
                onChange={e => dispatch(changeFilter(e.target.value))}
                className={s.search}
                placeholder="Search note..."
            />
        </div>
        
    )
}

export default SearchBox;