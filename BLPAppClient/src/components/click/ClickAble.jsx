const Clickable = props => {
  const {
    children,
    onClick,
    ...rest
  } = props;

  return (
    <span {...rest}>
      {children}
    </span>
  );
};

export default Clickable;
