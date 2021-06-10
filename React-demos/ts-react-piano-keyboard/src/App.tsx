import { notes } from './helpers';
import { Octave } from './Octave';

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  }



  return (
    <div className="App">
      <Octave notes={notes} clickHandler={handleClick} />
    </div>
  );
}

export default App;
