import React from 'react'
import '../styles.css'

function Pokedox() {
    return <div className="container">
        <div className="card">
            <h3>Find your Pokemon!</h3>
            <h2>Search for the Pokemon to find the most important information</h2>
            <img id="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                 alt="Bulbasaur"/>
            <h2 id="pokemon-name">Bulbasaur</h2>
            <p id="pokemon-type">Type: Grass/Poison</p>
            <p id="pokemon-height">Height: 0.7m</p>
            <p id="pokemon-weight">Weight: 6.9kg</p>
            <button className="button" onClick={getRandomPokemon}>Previous</button>
            <button className="button" onClick={getRandomPokemon}>Next</button>
        </div>
        <div className="search">
            <input id="search-input" type="text" placeholder="Search..."/>
            <button onClick={searchPokemon}>Search</button>
        </div>
    </div>
    
    function getRandomPokemon() {
        // Get a random Pokemon ID between 1 and 898
        let randomId = Math.floor(Math.random() * 898) + 1;
        // Use the PokeAPI to get data for the random Pokemon
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then(response => response.json())
            .then(data => {
                // Update the card with the data for the random Pokemon
                document.getElementById('pokemon-img').src = data.sprites.front_default;
                document.getElementById('pokemon-name').innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                document.getElementById('pokemon-type').innerHTML = `Type: ${data.types.map(type => type.type.name).join('/')}`;
                document.getElementById('pokemon-height').innerHTML = `Height: ${data.height / 10}m`;
                document.getElementById('pokemon-weight').innerHTML = `Weight: ${data.weight / 10}kg`;
            })
            .catch(error => console.log(error));
    }

    function searchPokemon() {
        let pokemonName = document.getElementById('search-input').value.trim().toLowerCase();
        if (pokemonName.length === 0) {
            alert('Please enter a Pokemon name');
            return;
        }
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokemon not found');
                }
                return response.json();
            })
            .then(data => {
                // Update the card with the data for the searched Pokemon
                document.getElementById('pokemon-img').src = data.sprites.front_default;
                document.getElementById('pokemon-name').innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                document.getElementById('pokemon-type').innerHTML = `Type: ${data.types.map(type => type.type.name).join('/')}`;
                document.getElementById('pokemon-height').innerHTML = `Height: ${data.height / 10}m`;
                document.getElementById('pokemon-weight').innerHTML = `Weight: ${data.weight / 10}kg`;
            })
            .catch(error => {
                console.log(error);
                alert('Pokemon not found');
            });
    }
}


export default Pokedox