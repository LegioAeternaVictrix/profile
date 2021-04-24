import Title from "./Title";
import Card from "./Card";
import { CardInfo } from "./Card";

function Hobbies() {
  return (
    <div className="container">
      <Title title="Passive activities & Hobbies" />
      <div className="me-content cards">
        <Card
          title="History"
          img="history"
          href="https://www.youtube.com/watch?v=RlKJDwViNKs"
        >
          <CardInfo>
            History is not written in ink. History is written with fire and
            blood.
          </CardInfo>
        </Card>

        <Card title="Gaming" img="gaming" href="https://www.totalwar.com/">
          <CardInfo>Witcher</CardInfo>
          <CardInfo>Total War</CardInfo>
          <CardInfo>Assassin's Creed</CardInfo>
          <CardInfo>War Thunder</CardInfo>
        </Card>

        <Card
          title="Coding"
          img="coding"
          href="https://github.com/LegioAeternaVictrix"
        >
          <CardInfo>System.out.println("I")</CardInfo>
          <CardInfo>Console.WriteLine("love")</CardInfo>
          <CardInfo>console.log("coding")</CardInfo>
        </Card>
        <Card
          title="Movies"
          img="marvel"
          href="https://www.youtube.com/watch?v=aiRY36TPVo8"
        >
          <CardInfo>MARVEL</CardInfo>
          <CardInfo>History</CardInfo>
          <CardInfo>Science Fiction</CardInfo>
        </Card>
        <Card
          title="TV Series"
          img="got"
          href="https://www.youtube.com/watch?v=ndl1W4ltcmg"
        >
          <CardInfo>The Mentalist</CardInfo>
          <CardInfo>Breaking Bad</CardInfo>
          <CardInfo>Sherlock Holmes</CardInfo>
          <CardInfo>Game Of Thrones</CardInfo>
          <CardInfo>Band of Brothers</CardInfo>
        </Card>
      </div>
    </div>
  );
}

export default Hobbies;
