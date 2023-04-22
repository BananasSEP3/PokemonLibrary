import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let pokemonName;

//import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//created by me
/*
function getPokemon(pokemonName) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
}

const Pokemon = async () => {
    const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const abilitiesResponse = await Promise.all(
        pokemonResponse.data.abilities.map((ability) => axios.get(ability.ability.url))
    );

    const pokemon = {
        name: pokemonResponse.data.name,
        image: pokemonResponse.data.sprites.front_default,
        abilities: abilitiesResponse.map((abilityResponse) => ({
            name: abilityResponse.data.name,
            effect: abilityResponse.data.effect_entries[0].effect,
            description: abilityResponse.data.flavor_text_entries[0].flavor_text,
        })),
    };

    setPokemon(pokemon);
    return (
        <div>
            <input type="text" onChange={(e) => fetchPokemon(e.target.value)} />
            {pokemon && (
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <ul>{pokemon.abilities}</ul>
                </div>
            )}
        </div>
    );
}*/
