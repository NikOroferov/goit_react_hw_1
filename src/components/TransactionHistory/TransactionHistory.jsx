import css from 'components/TransactionHistory/TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table class={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHeading}>Type</th>
          <th className={css.tableHeading}>Amount</th>
          <th className={css.tableHeading}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.tableCell}>{type}</td>
            <td className={css.tableCell}>{amount}</td>
            <td className={css.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
