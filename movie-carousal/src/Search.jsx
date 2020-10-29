import React, { useState } from "react";
import "./styles.css";

export default function Search(props) {
  const [value, setValue] = useState("");
  return (
    <div className="searchPane">
      <input
        type="text"
        className="searchBar"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Type Here..."
      />
      &nbsp;&nbsp;
      <button type="button" onClick={(event) => props.onClick(value)}>
        Click to Search
      </button>
    </div>
  );
}
