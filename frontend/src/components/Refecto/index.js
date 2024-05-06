import React from "react";

export default function Refecto({ data }) {
  function isJSON(str) {
    try {
      if (typeof JSON.parse(str) === "number") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }

  const parseJsonData = (data) => {
    let parsedData = {};
    for (let key in data) {
      if (typeof data[key] === "object") {
        if (Array.isArray(data[key])) {
          let parsedValue = [];
          Object.keys(data[key]).forEach((_, i) => {
            parsedValue.push(parseJsonData(data[key][i]));
          });
          parsedData[key] = parsedValue;
        } else {
          const parsedValue = parseJsonData(data[key]);
          parsedData[key] = parsedValue;
        }
      } else {
        if (isJSON(data[key])) {
          const parsedValue = parseJsonData(JSON.parse(data[key]));
          parsedData[key] = parsedValue;
        } else {
          parsedData[key] = data[key];
        }
      }
    }
    return parsedData;
  };

  return (
    <div className="code-block">
      <pre>{JSON.stringify(parseJsonData(data), null, 2)}</pre>
    </div>
  );
}
