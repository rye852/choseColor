import { useState } from 'react';
import Content from './Content';
import ChoseColor from './ChoseColor';
function App() {
  let [color, setColor] = useState('');

  const changeColor = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <Content color={color} />
      <ChoseColor changeColor={changeColor} color={color} />
    </div>
  );
}

export default App;
