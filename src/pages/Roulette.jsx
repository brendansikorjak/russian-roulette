// import '../styles/Roulette.css';

function Roulette({ shoot, clickBangText, shotsLeftText }) {
  return (
    <>
      <div>
        <h1>Russian Roulette</h1>
      </div>
      <div className="card">
        <button onClick={shoot}>shoot gun</button>
      </div>
      <div>
        {clickBangText} {shotsLeftText}
      </div>
    </>
  );
}

export default Roulette;
