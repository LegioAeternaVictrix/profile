import Detail from "./common/Detail";
import Button from "./common/Button";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-left">
        <img className="profile-photo" src="/img/me.jpg" alt="me" />
        <h1 className="profile-name">Claudiu Baituc</h1>
        <h4 className="web-developer">WEB DEVELOPER</h4>
        <div className="details">
          <Detail icon="street-view" hiddenText="(born and raised)">
            Arad
          </Detail>
          <Detail icon="birthday-cake" hiddenText="(21.06.1996)">
            XXI.VI.MCMXCVI
          </Detail>
        </div>
      </div>
      <div className="profile-right">
        <h1 className="">Hi, I`m Claudiu,</h1>

        <h2>a developer specialized in both front-end and back-end.</h2>
        <Button icon="fas fa-project-diagram" href="/projects">
          PROJECTS
        </Button>
        <Button
          icon="fab fa-github"
          href="https://github.com/LegioAeternaVictrix"
        >
          GITHUB
        </Button>
      </div>
    </div>
  );
}

export default Profile;
