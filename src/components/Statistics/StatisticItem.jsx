import PropTypes from 'prop-types';
import { Item, Label, Value } from './StatisticItem.styled';

const StatisticItem = ({ label, percentage, background }) => {
  return (
    <Item background={background}>
      <Label>{label}</Label>
      <Value>{percentage}%</Value>
    </Item>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  background: PropTypes.string,
};

export default StatisticItem;
