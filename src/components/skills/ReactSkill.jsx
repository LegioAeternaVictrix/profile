import Skill from "./Skill";
import Detail from "../common/Detail";

function ReactSkill() {
  return (
    <Skill skill="React" img="react">
      <Detail icon="fas fa-bookmark">
        Build powerful, fast, user-friendly apps
      </Detail>
      <Detail icon="fas fa-bookmark">
        All about React Hooks and React Components
      </Detail>
      <Detail icon="fas fa-bookmark">Redux essentials</Detail>
    </Skill>
  );
}

export default ReactSkill;
