import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positive }) => {
  const { good, neutral, bad } = feedback;

  return (
    <ul className={css.stats}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
