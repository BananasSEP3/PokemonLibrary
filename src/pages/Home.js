import React from "react";
import './home.css'
import image from "../images/pikachu.jpg";

const Home = () => {
    return (
        <section id="home-section">
            <h2>Welcome to the Pokemon World!</h2>
            <p>"I won't lose because I have a Pokemon." - Ash Ketchum</p>
            <p>"A true Pokemon Master doesn't win because they're the best. They win because they're the best at
                learning."
                - Pikachu</p>
            <img src={image} alt="A picture of Pikachu"/>

            <h3>Here are some common Pokemon vocabulary words to help you on your journey:</h3>
            <ul>
                <li>Pokemon - creatures that inhabit the world of Pokemon</li>
                <li>Pokedex - a device used to record information about Pokemon</li>
                <li>Trainer - a person who catches and trains Pokemon</li>
                <li>Gym Leader - a powerful trainer who presides over a Pokemon gym</li>
                <li>Evolve - the process by which a Pokemon transforms into a stronger form</li>
                <li>Type - a characteristic of a Pokemon that determines its strengths and weaknesses</li>
                <li>Attack - a move that a Pokemon can use to battle other Pokemon</li>
                <li>HP - short for hit points, a measure of a Pokemon's health</li>
            </ul>
        </section>
    )
};

export default Home;