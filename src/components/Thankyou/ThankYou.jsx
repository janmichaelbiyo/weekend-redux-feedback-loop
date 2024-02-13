import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ThankYou() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNavtoStart = (event) => {
    event.preventDefault();
    dispatch({
      type: 'FEELING_ADD',
      payload: 1,
    });
    dispatch({
      type: 'UNDERSTANDING_ADD',
      payload: 1,
    });
    dispatch({
      type: 'SUPPORT_ADD',
      payload: 1,
    });
    dispatch({
      type: 'COMMENT_ADD',
      payload: '',
    });

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

export default ThankYou;
