import Skill from "./Skill";
import Detail from "../common/Detail";

function NodeSkill() {
  return (
    <Skill skill="Node.js" img="nodejs">
      <Detail color="nodejs" icon="fas fa-bookmark">
        CRUD operations
      </Detail>
      <Detail color="nodejs" icon="fas fa-bookmark">
        Security
      </Detail>
      <Detail
        color="nodejs"
        icon="fas fa-bookmark"
        hiddenText="(GreenCode project)"
      >
        Credit card payments with Stripe
      </Detail>
      <Detail
        color="nodejs"
        icon="fas fa-bookmark"
        hiddenText="(GreenCode project)"
      >
        Sending emails & uploading files
      </Detail>
      <Detail color="nodejs" icon="fas fa-bookmark">
        Server-side website rendering with Pug templates
      </Detail>
      <Detail color="nodejs" icon="fas fa-bookmark">
        Advanced authentication and authorization
      </Detail>
    </Skill>
  );
}

export default NodeSkill;
