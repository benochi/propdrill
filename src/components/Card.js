

function Card({currentState, setState, msg, title}) {
  
  const handleClick = () => {
    setState(msg);
  };

  return (
    <div className="Card">
      <h2>{title}</h2>
      <p>currentState: {currentState}</p>
      <button onClick={handleClick}>setComponentState</button>
    </div>
  );
}

export default Card;