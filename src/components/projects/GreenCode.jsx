import Project from "./Project";
import Detail from "../common/Detail";

function GreenCode() {
  return (
    <Project
      name="Green Code"
      logo="greencode"
      description="Project description..."
      projectLink="https://greencode.herokuapp.com/"
      projectCodeLink="https://github.com/LegioAeternaVictrix/green-code"
    >
      <Detail
        color="nodejs"
        icon="fab fa-node-js"
        hiddenText="(Express, MongoDB)"
      >
        Node.js
      </Detail>
      <Detail color="nodejs" icon="fab fa-bootstrap" hiddenText="5">
        Bootstrap
      </Detail>
      <Detail color="nodejs" icon="fas fa-box" hiddenText="(and more)">
        Stripe, SendGrid
      </Detail>
    </Project>
  );
}

export default GreenCode;
