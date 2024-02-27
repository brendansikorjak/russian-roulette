import '../styles/GameOver.css';

function GameOver({ reload }) {
  return (
    <div>
      <style>
        {'body { background-color:  #1c0352; animation: leak 5s forwards; }'}
      </style>
      <div>
        <h1 className="bang">BANG</h1>
      </div>
      <div>
        <button onClick={reload}>Reload</button>
      </div>
    </div>
  );
}

export default GameOver;
