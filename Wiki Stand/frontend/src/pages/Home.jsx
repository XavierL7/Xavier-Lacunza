import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <h1>Wiki Stand</h1>

      <Link to="/stands">
        Ver Stands
      </Link>

    </div>
  );
}

export default Home;