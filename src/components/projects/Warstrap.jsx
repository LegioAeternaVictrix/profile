import Project from "./Project";
import Detail from "../common/Detail";

function Warstrap() {
  return (
    <Project
      name="Warstrap"
      logo="warstrap"
      description="Not online yet"
      projectLink="/warstrap"
      projectCodeLink="https://github.com/LegioAeternaVictrix/warstrap-front-end"
    >
      <Detail color="react" icon="fab fa-react">
        React
      </Detail>
    </Project>
  );
}

export default Warstrap;
