import '../styles/GameOver.css';

function GameOver({ reload }) {
  return (
    <div>
      <style>{'body { background-color: red; }'}</style>
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
