import { useState } from 'react';

function RusRoulette() {
  const [bullet, setBullet] = useState(Math.floor(Math.random() * 6) + 1);
  const [count, setCount] = useState(6);
  const [btnMsg, setBtnMsg] = useState('shoot gun');
  const [text, setText] = useState(count + ' shots left');
  const [liveGame, setLiveGame] = useState(true);
  const shoot = () => {
    console.log(count);
    console.log('the bullet is in chamber ' + bullet);
    setCount(count - 1);
    setText(count - 1 + ' shots left');
    // setCount((count) => count + 1);
    if (count === bullet) {
      console.log('BANG');
      setLiveGame(false);
      setText('BANG');
      setBtnMsg('Play Again?');
    } else {
      console.log('click');
      setBtnMsg('shoot gun');
    }
  };
  if (liveGame === false) {
    setLiveGame(true);
    setCount(6);
    setBullet(Math.floor(Math.random() * 6) + 1);
  }
  if (count === 0) {
    setCount(6);
  }

  return (
    <>
      <div>
        <h1>Russian Roulette</h1>
      </div>
      <div className="card">
        <button onClick={shoot}>{btnMsg}</button>
      </div>
      <div>{text}</div>
    </>
  );
}

export default RusRoulette;
