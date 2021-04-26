import Detail from "./common/Detail";
import Button from "./common/Button";
import { DetailsBox } from "./common/Detail";

function Profile() {
  return (
    <div className="profile">
      <div className="box-left bg-deeppink">
        <img className="profile-photo" src="/img/me.jpg" alt="me" />
        <h1 className="profile-name ff-1 text-shadow">Claudiu Baituc</h1>
        <h4 className="profile-developer ff-1 text-shadow">WEB DEVELOPER</h4>
        <DetailsBox>
          <Detail icon="fas fa-street-view" hiddenText="(born and raised)">
            Arad
          </Detail>
          <Detail icon="fas fa-birthday-cake" hiddenText="(21.06.1996)">
            XXI.VI.MCMXCVI
          </Detail>
        </DetailsBox>
      </div>
      <div className="box-right bg-dark-transparent">
        <h1 className="profile-hi">Hi, I'm Claudiu,</h1>

        <p className="text">
          a developer specialized in both front-end and back-end.
        </p>
        <Button icon="fas fa-project-diagram" href="/my-projects">
          MY PROJECTS
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
