import React from 'react';
import { useHistory } from 'react-router-dom';

function Submission() {
  const history = useHistory();
  const handleNavtoStart = () => {
    history.push('/');
  };
  return (
    <div>
      <h4> Thank You! </h4>

      <button data-testid="next" onClick={handleNavtoStart}>
        Leave New Feedback
      </button>
    </div>
  );
}

export default Submission;
