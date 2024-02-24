import { IconContext } from 'react-icons';
import style from './Statistics.module.css';

export const StatisticsItem = ({ total, title, icon }) => {
  return (
    <div className={style.item}>
      <IconContext.Provider value={{ color: 'gray', size: '30px' }}>
        {icon}
      </IconContext.Provider>

      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </div>
  );
};
