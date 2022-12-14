import PropTypes from 'prop-types';
import { StatisticsStyled } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsStyled>
      <span>
        Good: <span className="good">{good}</span>
      </span>
      <span>
        Neutral: <span className="neutral">{neutral}</span>
      </span>
      <span>
        Bad: <span className="bad">{bad}</span>
      </span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positivePercentage}%</span>
    </StatisticsStyled>
  );
};

export default Statistics;

Notification.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
