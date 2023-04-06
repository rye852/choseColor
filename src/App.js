import { useState } from 'react';
import Content from './Content';
import ChoseColor from './ChoseColor';
import colorNames from 'colornames';
import ToggleThem from './ToggleThem';
function App() {
  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  const changeColor = (e) => {
    e.preventDefault();
    setColor(e.target.value);
    setHexValue(colorNames(e.target.value));
  };
  const toggleTheme = () => {
    setIsDarkText(!isDarkText)
  }
  return (
    <div className="App">
      <Content color={color} hexValue={hexValue} isDarkText={isDarkText} />
      <ChoseColor changeColor={changeColor} color={color} />
      <ToggleThem toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
