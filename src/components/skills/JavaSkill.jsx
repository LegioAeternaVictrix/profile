import Skill from "./Skill";
import Detail from "../common/Detail";

function Java() {
  return (
    <Skill skill="Java" img="java">
      <Detail color="java" icon="fas fa-bookmark">
        Java 8 syntax and OOP concepts
      </Detail>
      <Detail color="java" icon="fas fa-bookmark">
        Advanced topics
      </Detail>
      <Detail color="java" icon="fas fa-bookmark" hiddenText="and more?">
        hmm...
      </Detail>
    </Skill>
  );
}

export default Java;
