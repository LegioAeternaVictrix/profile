import Project from "./common/Project";
import Detail from "./common/Detail";

function Projects() {
  return (
    <div className="bg-dark-transparent" style={{ padding: "5rem" }}>
      <Project
        name="Green Code"
        logo="greencode"
        description="Project description..."
        projectLink="https://greencode.herokuapp.com/"
        projectCodeLink="https://github.com/LegioAeternaVictrix/green-code"
      >
        <Detail icon="fab fa-node-js" hiddenText="(Express, MongoDB)">
          Node.js
        </Detail>
        <Detail icon="fab fa-bootstrap" hiddenText="5">
          Bootstrap
        </Detail>
        <Detail icon="fas fa-box" hiddenText="(and more)">
          Stripe, SendGrid
        </Detail>
      </Project>

      <Project
        name="Warstrap"
        logo="warstrap"
        description="Not online yet"
        projectLink="/warstrap"
        projectCodeLink="https://github.com/LegioAeternaVictrix/warstrap-front-end"
      >
        <Detail icon="fab fa-react">React</Detail>
      </Project>
    </div>
  );
}

export default Projects;
