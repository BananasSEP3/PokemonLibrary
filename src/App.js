import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            setPokemonData(response.data);
        } catch (error) {
            setError(error);
            setPokemonData(null);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={pokemonName} onChange={(event) => setPokemonName(event.target.value)} />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Search'}
                </button>
            </form>
            {error && <div>{error.message}</div>}
            {pokemonData && (
                <div>
                    <h2>{pokemonData.name}</h2>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    <ul>
                        {pokemonData.types.map((type) => (
                            <li key={type.slot}>{type.type.name}</li>
                        ))}
                    </ul>


                </div>
            )}
        </div>
    );
}

export default App;