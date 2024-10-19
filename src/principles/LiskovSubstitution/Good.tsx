import React from "react";

interface Movable {
  move(): string;
}

class FlyingBird implements Movable {
  move() {
    return "I'm flying!";
  }
}

class FLightlessBird implements Movable {
  move() {
    return "I'm running";
  }
}

const BirdComponent: React.FC<{ bird: Movable }> = ({ bird }) => {
  return <div>{bird.move()}</div>;
};

const BadExample: React.FC = () => {
  const flyingBird = new FlyingBird();
  const flightlessBird = new FLightlessBird();

  return (
    <div>
      <BirdComponent bird={flyingBird} />
      <BirdComponent bird={flightlessBird} />
    </div>
  );
};

export default BadExample;
