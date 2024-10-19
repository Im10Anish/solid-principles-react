import React from "react";

interface Workable {
  work(): string;
}

interface Eatable {
  eat(): string;
}

interface Sleepable {
  sleep(): string;
}

class Human implements Workable, Eatable, Sleepable {
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

class Robot implements Workable {
  work() {
    return "Working";
  }
}

const WorkerComponent: React.FC<{ worker: Workable }> = ({ worker }) => {
  return <div>{worker.work()}</div>;
};

const LivingBeingComponent: React.FC<{ entity: Eatable & Sleepable }> = ({
  entity,
}) => {
  return (
    <div>
      <div>{entity.eat()}</div>
      <div>{entity.sleep()}</div>
    </div>
  );
};

const GoodExample: React.FC = () => {
  const human = new Human();
  const robot = new Robot();

  return (
    <div>
      <WorkerComponent worker={human} />
      <WorkerComponent worker={robot} />
      <LivingBeingComponent entity={human} />
    </div>
  );
};

export default GoodExample;
