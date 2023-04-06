const Content = ({ color, hexValue, isDarkText }) => {
  return (
    <div className="content">
      <p style={{ backgroundColor: color, color: isDarkText ? "#111" : '#fff' }}>
        {color.length ? color : 'Empty Value'}
        <span>{hexValue ? hexValue : null}</span>
      </p>
    </div>
  );
};

export default Content;
