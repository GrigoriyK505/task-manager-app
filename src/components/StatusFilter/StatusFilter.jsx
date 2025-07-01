import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { Dropdown } from 'primereact/dropdown';
import { setStatusFilter } from "../../redux/filters/slice.js";
import { fetchStatusFilters } from "../../redux/filters/operations.js";
import s from './StatusFilter.module.css';

const StatusFilter = () => {
    const dispatch = useDispatch();
    const statusFilter = useSelector((state) => state.filters.status);
    const filterOptions = useSelector((state) => state.filters.list);
    const loading = useSelector((state) => state.filters.loading);

    useEffect(() => {
        dispatch(fetchStatusFilters());
    }, [dispatch]);

    const handleFilterChange = (e) => {
        dispatch(setStatusFilter(e.value));
    };

    return (
        <div className={s.wrapper}>
            <Dropdown 
                value={statusFilter}   
                onChange={handleFilterChange} 
                options={filterOptions}
                optionLabel="label"
                optionValue="value"
                loading={loading} 
                placeholder="Select a filter"
            />
        </div>
    )
};

export default StatusFilter;