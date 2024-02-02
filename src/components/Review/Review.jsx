import React from 'react';
import { useHistory } from 'react-router-dom';

function Review() {
  const history = useHistory();
  const handleNavtoSubmission = () => {
    history.push('/submission');
  };
  return (
    <div>
      <h1>Review Your Feedback</h1>
      <ul>
        <li>Feeling:</li>
        <li>Understanding:</li>
        <li>Support:</li>
        <li>Comments:</li>
        <button onClick={handleNavtoSubmission}>SUBMIT</button>
      </ul>
    </div>
  );
}

export default Review;
