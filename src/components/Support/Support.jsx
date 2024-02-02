import React from 'react';
import { useHistory } from 'react-router-dom';

function Support() {
  const history = useHistory();
  const handleNavtoComment = () => {
    history.push('/comment');
  };
  return (
    <div>
      <h1>How well are you being supported?</h1>
      <form>
        <label>Support?</label>
        <button type="submit" onClick={handleNavtoComment}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Support;
