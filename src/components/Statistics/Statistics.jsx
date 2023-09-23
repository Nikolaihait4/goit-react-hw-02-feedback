import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statisticssection}>
      <ul className={css.statisticscomponent}>
        <li className={css.statisticsitem}>
          <p className={css.statisticsdescr}>Good:</p>
          <span className={css.statisticsvalue}>{good}</span>
        </li>
        <li className={css.statisticsitem}>
          <p className={css.statisticsdescr}>Neutpal:</p>
          <span className={css.statisticsvalue}>{neutral}</span>
        </li>
        <li className={css.statisticsitem}>
          <p className={css.statisticsdescr}>Bad:</p>
          <span className={css.statisticsvalue}>{bad}</span>
        </li>
        <li className={css.statisticsitem}>
          <p className={css.statisticsdescr}>Total:</p>
          <span className={css.statisticsvalue}>{total}</span>
        </li>
        <li className={css.statisticsitem}>
          <p className={css.statisticsdescr}>Positive feedback::</p>
          <span className={css.statisticsvalue}>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};
