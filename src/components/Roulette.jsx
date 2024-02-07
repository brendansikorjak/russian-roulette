import { useState } from 'react';

function RusRoulette() {
  const [bullet, setBullet] = useState(Math.floor(Math.random() * 6) + 1);
  const [count, setCount] = useState(6);

  const shoot = () => {
    console.log(count);
    console.log('the bullet is in chamber ' + bullet);
    setCount(count - 1);
    // setCount((count) => count + 1);
    if (count === bullet) {
      console.log('BANG');
      setCount(6);
      setBullet(Math.floor(Math.random() * 6) + 1);
    } else {
      console.log('click');
    }
  };

  if (count === 0) {
    setCount(6);
  }

  return (
    <>
      <div className="card">
        <button onClick={shoot}>count is {count}</button>
      </div>
    </>
  );
}

export default RusRoulette;
