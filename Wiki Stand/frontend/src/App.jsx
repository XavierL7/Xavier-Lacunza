import { BrowserRouter, Routes, Route } from "react-router-dom";

import Stands from "./pages/Stands";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/stands" element={<Stands />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;