import React from "react";

interface Worker {
  work(): string;
  eat(): string;
  sleep(): string;
}

class Human implements Worker {
  work() {
    return "Working";
  }
  eat() {
    return "Eating";
  }
  sleep() {
    return "Sleeping";
  }
}

class Robot implements Worker {
  work() {
    return "Working";
  }
  eat() {
    return new Error("Robots don't eat");
  }
  sleep() {
    return new Error("Robots don't sleep");
  }
}

const WorkerComponent: React.FC<{ worker: Worker }> = ({ worker }) => {
  return (
    <div>
      <div>{worker.work()}</div>
      <div>{worker.eat()}</div>
      <div>{worker.sleep()}</div>
    </div>
  );
};

const BadExample: React.FC = () => {
  const human = new Human();
  const robot = new Robot();

  return (
    <div>
      <WorkerComponent worker={human} />
      <WorkerComponent worker={robot} /> {/* This will throw errors */}
    </div>
  );
};

export default BadExample;
