import css from 'components/Statistics/Statistics.module.css';

export default function Statistic({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item} key={id} style={{ backgroundColor: generateColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const generateColor = () => {
  return `#${Math.random().toString(16).substr(-6)}`;
};
