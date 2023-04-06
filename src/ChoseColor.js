const ChoseColor = ({ color, changeColor }) => {
  return (
    <input
      type="text"
      className="choseColor"
      placeholder="Add color"
      autoFocus
      value={color}
      onChange={(e) => changeColor(e)}
    />
  );
};

export default ChoseColor;
