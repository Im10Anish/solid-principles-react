import React from "react";

class Bird {
  fly() {
    return "I'm flying!";
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("I can't fly");
  }
}

const BirdComponent: React.FC<{ bird: Bird }> = ({ bird }) => {
  return <div>{bird.fly()}</div>;
};

const BadExample: React.FC = () => {
  const bird = new Bird();
  const ostrich = new Ostrich();

  return (
    <div>
      <BirdComponent bird={bird} />
      <BirdComponent bird={ostrich} /> {/* This will throw an error */}
    </div>
  );
};

export default BadExample;
