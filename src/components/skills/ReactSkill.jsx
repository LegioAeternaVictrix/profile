import Skill from "./Skill";
import Detail from "../common/Detail";

function ReactSkill() {
  return (
    <Skill skill="React" img="react">
      <Detail color="react" icon="fas fa-bookmark">
        Build powerful, fast, user-friendly apps
      </Detail>
      <Detail color="react" icon="fas fa-bookmark">
        All about React Hooks and React Components
      </Detail>
      <Detail color="react" icon="fas fa-bookmark">
        Redux essentials
      </Detail>
    </Skill>
  );
}

export default ReactSkill;
