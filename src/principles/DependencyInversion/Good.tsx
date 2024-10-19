import React, { useState } from "react";

interface Database {
  getData(): string;
}

class MySQLDatabase implements Database {
  getData(): string {
    return "Data from MySQL";
  }
}

class MongoDatabase implements Database {
  getData(): string {
    return "Data from MongoDB";
  }
}

class DataDisplayer {
  constructor(private database: Database) {}

  displayData(): string {
    return this.database.getData();
  }
}

const GoodExample: React.FC = () => {
  const [data, setData] = useState<string>("");
  const [useMySQL, setUseMySQL] = useState<boolean>(true);

  const handleClick = () => {
    const database = useMySQL ? new MySQLDatabase() : new MongoDatabase();
    const displayer = new DataDisplayer(database);
    setData(displayer.displayData());
  };

  return (
    <div>
      <button onClick={() => setUseMySQL(!useMySQL)}>
        Toggle Database (Current: {useMySQL ? "MySQL" : "MongoDB"})
      </button>
      <button onClick={handleClick}>Fetch Data</button>
      <div>{data}</div>
    </div>
  );
};

export default GoodExample;
