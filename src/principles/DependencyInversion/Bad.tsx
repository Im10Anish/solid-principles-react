import React, { useState } from "react";

class MySQLDatabase {
  getData(): string {
    return "Data from MySQL";
  }
}

class DataDisplayer {
  private databse: MySQLDatabase;

  constructor() {
    this.databse = new MySQLDatabase();
  }

  displayData(): string {
    return this.databse.getData();
  }
}

const BadExample: React.FC = () => {
  const [data, setData] = useState<"string">("");

  const handleClick = () => {
    const displayer = new DataDisplayer();
    setData(displayer.displayData());
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      <div>{data}</div>
    </div>
  );
};

export default BadExample;
