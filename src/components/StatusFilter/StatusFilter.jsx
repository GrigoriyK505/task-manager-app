import { useDispatch, useSelector } from "react-redux";
import { setCompletedFilter } from "../../redux/filters/slice";
import { Dropdown } from 'primereact/dropdown';
import s from './StatusFilter.module.css';

const StatusFilter = () => {
  const dispatch = useDispatch();
  const completed = useSelector(state => state.filters.completed);

  const options = [
    { label: "All", value: null },
    { label: "Complete", value: true },
    { label: "Active", value: false },
  ];

  const handleChange = (e) => {
    dispatch(setCompletedFilter(e.value));
  };

  return (
    <div className={s.customDropdownWrapper}>
    <Dropdown
      value={completed}
      options={options}
      optionLabel="label"
      optionValue="value"
      onChange={handleChange}
      placeholder="Выберите фильтр"
      showClear={true}
      />
    </div>
  );
};

export default StatusFilter;