import css from './Feedback.module.css'

const Feedback = feedback => {
  const { good, neutral, bad } = feedback.feedback;
  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);

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
