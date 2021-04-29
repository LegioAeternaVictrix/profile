import "../../styles/Skill.css";
import { DetailsBox } from "../common/Detail";

function Skill(props) {
  return (
    <div className="skill bg-dark border-deeppink border-radius-sm">
      <div className="d-flex">
        <img
          className="skill-img bg-white border-radius-sm border-deepdark box-shadow-deepdark"
          src={`/img/skills/${props.img}.svg`}
          alt={`${props.skill} logo`}
        />
        <div className="skill-title-box d-flex">
          <div className="skill-title-bg">
            <h1 className={`skill-title text-shadow ff-1 color-${props.img}`}>
              {props.skill}
            </h1>
          </div>
        </div>
      </div>
      <div className="skill-info">
        <DetailsBox>{props.children}</DetailsBox>
      </div>
    </div>
  );
}

export default Skill;
