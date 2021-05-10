const Button = (props) => {
  const { onClick, name, styles } = props;

  return (
    <button onClick={onClick} style={styles}>
      {name}
    </button>
  );
};

export default Button;
