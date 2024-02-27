import { useState } from 'react';
import GameOver from '../pages/GameOver';
import Roulette from '../pages/Roulette';

function Home() {
  const [bullet, setBullet] = useState(Math.floor(Math.random() * 6) + 1);
  const [count, setCount] = useState(6);
  const [shotsLeftText, setShotsLeftText] = useState(count + ' shots left');
  const [clickBangText, setClickBangText] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const shoot = () => {
    console.log(count);
    console.log('the bullet is in chamber ' + bullet);
    setCount(count - 1);
    setShotsLeftText(count - 1 + ' shots left');

    if (count === bullet) {
      console.log('BANG');
      setClickBangText('BANG');
      setShotsLeftText('');
      setGameOver(true);
    } else {
      console.log('click');
      setClickBangText('click');
    }
  };

  const reload = () => {
    window.location.reload();
  };

  const renderPage = () => {
    if (gameOver) {
      return <GameOver reload={reload} />;
    }
    if (!gameOver) {
      return (
        <Roulette
          shoot={shoot}
          clickBangText={clickBangText}
          shotsLeftText={shotsLeftText}
        />
      );
    }
  };

  return (
    <div>
      <main className="mx-3">{renderPage()}</main>
    </div>
  );

  //   return (
  //     <div className={gameOver ? 'game-over' : ''}>
  //       {gameOver ? (
  //         <GameOver reload={reload} />
  //       ) : (
  //         <Roulette
  //           shoot={shoot}
  //           clickBangText={clickBangText}
  //           shotsLeftText={shotsLeftText}
  //         />
  //       )}
  //     </div>
  //   );
}

export default Home;
