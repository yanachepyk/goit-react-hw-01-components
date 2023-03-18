import PropTypes from 'prop-types';
import Transaction from './Transaction';
import { Table, TableBody, TableHeader } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TableHeader>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHeader>
      </thead>

      <TableBody>
        {items.map(transaction => (
          <Transaction
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </TableBody>
    </Table>
  )
};

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired
}

export default TransactionHistory;