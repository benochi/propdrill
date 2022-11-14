import { useState } from "react"

function Card({currentState, setState, msg, title}) {
  
  const handleClick = event => {
    setState(msg);
  };

  return (
    <div className="Card">
      <h2>{title}</h2>
      <p>currentState: {currentState}</p>
      <button onClick={handleClick}>I change state:</button>
    </div>
  );
}

export default Card;