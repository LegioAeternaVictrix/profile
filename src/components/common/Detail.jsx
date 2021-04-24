function Detail(props) {
  return (
    <div className="detail">
      <i className={`icon fas fa-${props.icon}`}></i>
      <span>{props.children}</span>
      <span className="hidden-text">{props.hiddenText}</span>
    </div>
  );
}

export default Detail;
