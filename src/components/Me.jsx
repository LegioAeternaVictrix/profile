import AboutMe from "./common/AboutMe";
import Hobbies from "./common/Hobbies";

function About() {
  return (
    <div className="bg-dark-transparent" style={{ padding: "5rem" }}>
      <AboutMe />
      <Hobbies />
    </div>
  );
}

export default About;
