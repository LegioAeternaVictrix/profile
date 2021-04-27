import Title from "../common/Title";
import Button from "../common/Button";
import { DetailsBox } from "../common/Detail";

function Project(props) {
  return (
    <div className="container border-radius-sm">
      <Title className="bg-deeppink text-shadow">{props.name}</Title>
      <div className="content d-flex bg-dark">
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
          <Title className="bg-white-transparent border-radius-sm">
            Description
          </Title>
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
