import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { Dropdown } from 'primereact/dropdown';

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(state => state.filters.name);
  const options = [
    { label: "Все", value: "all" },
    { label: "Завершенные", value: "complete" },
    { label: "Активные", value: "incomplete" },
  ];

  const handleChange = (e) => {
    dispatch(changeFilter(e.value));
  };

  return (
    <Dropdown
      value={filterName}
      options={options}
      optionLabel="label"
      optionValue="value"
      onChange={handleChange}
      placeholder="Выберите фильтр"
    />
  );
};

export default StatusFilter;