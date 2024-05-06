import React from "react";
import Refecto from "../components/Refecto";

export default function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/api/data");
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hi Developer</h1>

      {data &&
        typeof data === "object" &&
        Object.keys(data).length > 0 &&
        data.map((item, index) => <Refecto key={index} data={item} />)}
    </div>
  );
}
