import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Feeling() {
  const [inputFeeling, setInputFeeling] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitFeeling = (event) => {
    event.preventDefault();
    dispatch({
      type: 'FEELING_ADD',
      payload: inputFeeling,
    });
    history.push('/understanding');
  };

  const handlefeeling = (event) => {
    setInputFeeling(event.target.value);
  };

  return (
    <div>
      <h2>How are you felling today?</h2>

      <input
        data-testid="input"
        type="number"
        min="1"
        max="5"
        placeholder="1 to 5"
        onChange={handlefeeling}
      ></input>
      <button data-testid="next" onClick={submitFeeling}>
        NEXT
      </button>
    </div>
  );
}

export default Feeling;
