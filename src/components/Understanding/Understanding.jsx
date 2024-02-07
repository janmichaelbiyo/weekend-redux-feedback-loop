import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Understading() {
  const [inputUnderstanding, setInputUnderstanding] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const submitUnderstanding = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UNDERSTANDING_ADD',
      payload: inputUnderstanding,
    });
    history.push('/support');
  };

  const handleUnderstanding = (event) => {
    setInputUnderstanding(event.target.value);
  };

  return (
    <div>
      <h1>How well are you understanding the content? </h1>

      <label>Understanding?</label>
      <input
        type="number"
        min="1"
        max="5"
        placeholder="1 to 5"
        onChange={handleUnderstanding}
      />
      <button type="submit" onClick={submitUnderstanding}>
        NEXT
      </button>
    </div>
  );
}

export default Understading;
