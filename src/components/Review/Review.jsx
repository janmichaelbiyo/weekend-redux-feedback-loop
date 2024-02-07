import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Review() {
  const feeling = useSelector((state) => state.feeling);
  const understanding = useSelector((state) => state.understanding);
  const support = useSelector((state) => state.support);
  const history = useHistory();
  const handleNavtoSubmission = () => {
    history.push('/submission');
  };
  return (
    <div>
      <h1>Review Your Feedback</h1>
      <ul>
        <li>Feeling:{feeling}</li>
        <li>Understanding:{understanding}</li>
        <li>Support:{support}</li>
        <li>Comments:</li>
        <button onClick={handleNavtoSubmission}>SUBMIT</button>
      </ul>
    </div>
  );
}

export default Review;
