function Button(props) {
  return (
    <a className="btn border-radius-sm" href={props.href}>
      <i className={`icon ${props.icon}`}></i>
      <span>{props.children}</span>
    </a>
  );
}

export default Button;
