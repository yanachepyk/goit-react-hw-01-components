import PropTypes from 'prop-types';
import { TableRow } from './Transaction.styled';

const Transaction = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRow>
  );
};

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default Transaction;
