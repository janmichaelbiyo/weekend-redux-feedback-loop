import React from 'react';
import { useHistory } from 'react-router-dom';

function Understading() {
  const history = useHistory();
  const handleNavtosupport = () => {
    history.push('/support');
  };

  return (
    <div>
      <h1>How well are you understanding the content? </h1>
      <form>
        <label>Understanding?</label>
        <button type="submit" onClick={handleNavtosupport}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Understading;
