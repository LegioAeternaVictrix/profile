import Title from "./common/Title";
import Node from "./skills/NodeSkill";
import React from "./skills/ReactSkill";
import JavaScript from "./skills/JavaScriptSkill";
import Java from "./skills/JavaSkill";

function Skills() {
  return (
    <div className="bg-dark-transparent" style={{ padding: "5rem" }}>
      <div className="container bg-white-transparent border-radius-sm">
        <Title className="bg-deeppink text-shadow">My skills</Title>
        <div className="content">
          <Node />
          <React />
          <JavaScript />
          <Java />
        </div>
      </div>
    </div>
  );
}

export default Skills;
