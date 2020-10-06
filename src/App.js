import React from 'react';
const api = {
  key:"30b3297281114cad8a42e5b8da11911a",
  base:"https://api.openeathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
