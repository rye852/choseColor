const Content = ({ color }) => {
  return (
    <div className="content">
      {color.length ? (
        <p style={{ backgroundColor: color }}>{color}</p>
      ) : (
        <p>Empty value</p>
      )}
    </div>
  );
};

export default Content;
