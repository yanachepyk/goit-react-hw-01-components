import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import { Heading, Section, StatisticsList, Title } from './Statistics.styled';

const statisticItemPalette = [
  '#52c2f6',
  '#a33cf3',
  '#df526c',
  '#1eb9c3',
  '#c445c9',
];

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && (
        <Heading>
          <Title>{title}</Title>
        </Heading>
      )}
      <StatisticsList>
        {stats.map((stat, index) => (
          <StatisticItem
            key={stat.id}
            background={statisticItemPalette[index]}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </StatisticsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
