function GameOver({ reload }) {
  return (
    <>
      <div>
        <h1>BANG</h1>
      </div>
      <div>
        <button onClick={reload}>Reload</button>
      </div>
    </>
  );
}

export default GameOver;
