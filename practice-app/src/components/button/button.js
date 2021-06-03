const Button = (props) => {
  const { onClick, name, styles, type} = props;

  return (
    <button onClick={onClick} style={styles} type={type}>
      {name}
    </button>
  );
};

export default Button;
