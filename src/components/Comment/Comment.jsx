import React from 'react';
import { useHistory } from 'react-router-dom';

function Comment() {
  const history = useHistory();
  const handleNavtoReview = () => {
    history.push('/review');
  };
  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <form>
        <label>Comments</label>
        <input />
        <button type="submit" onClick={handleNavtoReview}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Comment;
