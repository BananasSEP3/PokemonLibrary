import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Pokedox from "./pages/Pokedox";
import Shop from "./pages/Shop";
import Layout from "./pages/Layout";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="Pokedox" element={<Pokedox/>}/>
                    <Route path="Shop" element={<Shop/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;