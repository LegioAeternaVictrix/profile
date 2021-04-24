import Button from "./Button";

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="card-title">{props.title}</h1>
      </div>
      <div className="card-body">
        <div className="card-details">{props.children}</div>
        <img className="card-img" src={`/img/card/${props.img}.jpg`} alt="me" />
      </div>
      <div className="card-footer">
        <Button href={props.href} icon="fas fa-link">
          Link
        </Button>
      </div>
    </div>
  );
}

function CardInfo({ children }) {
  return <h2 className="card-info">{children}</h2>;
}

export default Card;
export { CardInfo };
