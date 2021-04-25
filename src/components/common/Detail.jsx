function Detail(props) {
  return (
    <div className="detail">
      <i className={`icon ${props.icon}`}></i>
      <span>{props.children}</span>
      <span className="hidden-text">{props.hiddenText}</span>
    </div>
  );
}

function DetailsBox(props) {
  return (
    <div className="details">
      <h3 className="details-text">{props.text}</h3>
      {props.children}
    </div>
  );
}

export { DetailsBox };
export default Detail;
