import StatusFilter from '../StatusFilter/StatusFilter.jsx';
import s from './AppBar.module.css';

const AppBar = () => {
    return (
        <header className={s.wrapper}>
            <section className={s.section}>
                <h2 className={s.title}>Tasks</h2>
            </section>
            <section>
                <h2 className={s.title}>Filter bu status</h2>
                <StatusFilter />
            </section>
        </header>
    )
};

export default AppBar;