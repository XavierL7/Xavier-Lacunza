import { useEffect, useState } from "react";

function App() {
  const [stand, setStand] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/stand")
      .then(res => res.json())
      .then(data => setStand(data));
  }, []);

  return (
    <div>
      <h1>Wiki Stand</h1>

      {stand && (
        <div>
          <h2>{stand.nombre}</h2>
          <p>Usuario: {stand.usuario}</p>
        </div>
      )}
    </div>
  );
}

export default App;