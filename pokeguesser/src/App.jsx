import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pokedex from "./pages/Pokedex.jsx";
import Pokeguesser from "./pages/Pokeguesser.jsx";
import Search from "./pages/Search.jsx";
import Layout from "./components/Layout.jsx";

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/pokeguesser" element={<Pokeguesser />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Layout>
    );
}