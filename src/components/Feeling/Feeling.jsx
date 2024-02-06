import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Feeling() {
  const [inputFeeling, setInputFeeling] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNavtoUnderstanding = () => {
    history.push('/understanding');
  };

  const submitFeeling = (event) => {
    event.preventDefault();
    dispatch({
      type: 'FEELING_ADD',
      payload: [inputFeeling],
    });
    setInputFeeling('');
  };

  const handlefeeling = (event) => {
    setInputFeeling(event.target.value);
  };

  return (
    <div>
      <h1>How are you felling today?</h1>
      <form onSubmit={submitFeeling}>
        <label>Feeling?</label>
        <input
          type="number"
          placeholder="1-5"
          onChange={handlefeeling}
          value={inputFeeling}
        />
        <button type="submit" onClick={handleNavtoUnderstanding}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Feeling;
