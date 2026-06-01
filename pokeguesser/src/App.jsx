import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pokedex from "./pages/Pokedex.jsx";
import Pokeguesser from "./pages/Pokeguesser.jsx";

export default function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/pokeguesser" element={<Pokeguesser />} />
            </Routes>
    );
}