import React from 'react';
import { useHistory } from 'react-router-dom';

function Feeling() {
  const history = useHistory();
  const handleNavtoUnderstanding = () => {
    history.push('/understanding');
  };

  return (
    <div>
      <h1>How are you felling today?</h1>
      <form>
        <label>Feeling?</label>
        <input />
        <button type="submit" onClick={handleNavtoUnderstanding}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Feeling;
