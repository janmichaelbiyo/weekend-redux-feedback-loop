import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Comments() {
  const [inputComment, setInputComment] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const submitComment = (event) => {
    event.preventDefault();
    dispatch({
      type: 'COMMENT_ADD',
      payload: inputComment,
    });
    history.push('/review');
  };

  const handleComment = (event) => {
    setInputComment(event.target.value);
  };

  return (
    <div>
      <h1>Any comments you want to leave?</h1>

      <input
        data-testid="input"
        id="comment"
        type="text"
        onChange={handleComment}
      ></input>
      <button data-testid="next" type="submit" onClick={submitComment}>
        NEXT
      </button>
    </div>
  );
}

export default Comments;
