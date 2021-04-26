import Skill from "./Skill";
import Detail from "../common/Detail";

function JavaScriptSkill() {
  return (
    <Skill skill="JavaScript" img="javascript">
      <Detail icon="fas fa-bookmark">JavaScript fundamentals</Detail>
      <Detail icon="fas fa-bookmark">Modern OOP</Detail>
      <Detail icon="fas fa-bookmark">
        How to think and work like a developer
      </Detail>
    </Skill>
  );
}

export default JavaScriptSkill;
