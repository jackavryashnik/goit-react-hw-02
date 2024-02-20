import css from './Options.module.css';

const capitalize = word => word[0].toUpperCase() + word.slice(1);

const Options = ({ onClick, feedbackOptions, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.options}>
      {Object.entries(feedbackOptions).map(([key]) => (
        <button name={key} key={key} onClick={onClick}>
          {capitalize(key)}
        </button>
      ))}
      {totalFeedback != 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
