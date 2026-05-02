import { useEffect, useState } from "react";

function Stands() {

  const [stands, setStands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/stands")
      .then(res => res.json())
      .then(data => setStands(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>

      <h1>Lista de Stands</h1>

      {stands.length === 0 ? (
        <p>No hay stands</p>
      ) : (
            <div className="stands-container">

            {stands.map((stand) => (
                <div className="stand-card" key={stand.id}>

                <img
                    className="stand-img"
                    src={`http://localhost:3000${stand.imagen}`}
                    alt={stand.usuario}
                />

                <h2>{stand.nombre}</h2>

                <p>Usuario: {stand.usuario}</p>

                </div>
            ))}

            </div>
      )}

    </div>
  );
}

export default Stands;