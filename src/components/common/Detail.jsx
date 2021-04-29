import "../../styles/Detail.css";

function Detail(props) {
  return (
    <div className={`detail detail-${props.color}`}>
      <i className={`icon icon-${props.color} ${props.icon}`}></i>
      <span>{props.children}</span>
      <span className="hidden-text">{props.hiddenText}</span>
    </div>
  );
}

function DetailsBox(props) {
  return (
    <div className="details">
      <h3 className="details-text" style={props.style}>
        {props.text}
      </h3>
      {props.children}
    </div>
  );
}

export { DetailsBox };
export default Detail;
