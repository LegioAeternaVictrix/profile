import Skill from "./Skill";
import Detail from "../common/Detail";

function JavaScriptSkill() {
  return (
    <Skill skill="JavaScript" img="javascript">
      <Detail color="javascript" icon="fas fa-bookmark">
        JavaScript fundamentals
      </Detail>
      <Detail color="javascript" icon="fas fa-bookmark">
        Modern OOP
      </Detail>
      <Detail color="javascript" icon="fas fa-bookmark">
        How to think and work like a developer
      </Detail>
    </Skill>
  );
}

export default JavaScriptSkill;
