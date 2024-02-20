import css from './Options.module.css'

const Options = ({ onClick, obj, resetFeedback, totalFeedback }) => {
  const capitalize = word => word[0].toUpperCase() + word.slice(1);

  return (
    <div className={css.options}>
      {Object.entries(obj).map(([key]) => (
        <button name={key} key={key} onClick={onClick}>
          {capitalize(key)}
        </button>
      ))}
      {!totalFeedback ? '' : <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
