import { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { Title } from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [selected, setSelected] = useState(null);


  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelected={setSelected} />
      { selected && <Modal selected={selected} setSelected={setSelected} />}
    </div>
  );
}

export default App;
