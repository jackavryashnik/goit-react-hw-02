import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return !savedFeedback
      ? { good: 0, neutral: 0, bad: 0 }
      : JSON.parse(savedFeedback);
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  const updateFeedback = event => {
    const name = event.target.name;

    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="border-padding">
      <Description />
      <Options
        onClick={updateFeedback}
        feedbackOptions={feedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      )}
    </div>
  );
}

export default App;
