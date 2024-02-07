import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Support() {
  const [inputSupport, setInputSupport] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const submitSupport = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SUPPORT_ADD',
      payload: inputSupport,
    });
    history.push('/comment');
  };

  const handleSupport = (event) => {
    setInputSupport(event.target.value);
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>

      <input
        type="number"
        min="1"
        max="5"
        placeholder="1 to 5"
        onChange={handleSupport}
      />
      <button type="submit" onClick={submitSupport}>
        NEXT
      </button>
    </div>
  );
}

export default Support;
