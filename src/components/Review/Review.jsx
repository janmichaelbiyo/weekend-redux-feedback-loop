import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { postFeedback } from '../FeedbackAPI/feedback.api';

function Review() {
  const feeling = useSelector((state) => state.feeling);
  const understanding = useSelector((state) => state.understanding);
  const support = useSelector((state) => state.support);
  const comment = useSelector((state) => state.comment);

  const history = useHistory();
  const submitSubmission = (event) => {
    event.preventDefault();

    postFeedback({ feeling, understanding, support, comment })
      .then((response) => {
        history.push('/thankyou');
      })
      .catch((error) => {
        console.log('SOS at the post', error);
      });
  };
  return (
    <div>
      <h1>Review Your Feedback</h1>
      <ul>
        <li>Feeling: {feeling}</li>
        <li>Understanding: {understanding}</li>
        <li>Support: {support}</li>
        <li>Comments: {comment}</li>
        <button data-testid="next" onClick={submitSubmission}>
          SUBMIT
        </button>
      </ul>
    </div>
  );
}

export default Review;
