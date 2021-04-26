import Title from "./Title";

function AboutMe() {
  return (
    <div className="container border-radius-sm">
      <Title className="bg-deeppink text-shadow">About me</Title>
      <div className="content bg-white-transparent">
        <p className="text text-shadow">
          Sorry, I don't talk much when it comes to me. I don't want to sound
          too modest.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
