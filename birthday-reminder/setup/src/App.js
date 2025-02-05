import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List peoplle={people} />
        <button onClick={() => console.log("you clicked me!")}>
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
