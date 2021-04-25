import Title from "./Title";
import Button from "./Button";
import { DetailsBox } from "./Detail";

function Project(props) {
  return (
    <div className="container">
      <Title>{props.name}</Title>
      <div className="content d-flex">
        <div className="box-left">
          <img
            className="logo"
            src={`/img/logos/${props.logo}.png`}
            alt={`${props.name} logo`}
          />
          <h1 className="ff-1">{props.name}</h1>
          <DetailsBox text="Build with...">{props.children}</DetailsBox>
        </div>
        <div className="box-right">
          <Title>Description</Title>
          <p className="text">{props.description}</p>
          <Button href={props.projectLink} icon="fas fa-link">
            {props.name}
          </Button>
          <Button href={props.projectCodeLink} icon="fas fa-code-branch">
            Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Project;
