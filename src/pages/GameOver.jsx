export default function GameOver() {
  const reload = () => {
    setCount(6);
    setBullet(Math.floor(Math.random() * 6) + 1);
  };
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
