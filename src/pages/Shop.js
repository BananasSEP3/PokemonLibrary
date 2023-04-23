import React from 'react';
import guy from '../images/guy.jpg';
import keychain from '../images/keychain.jpg';
import backpack from '../images/Backpack.jpg';
import './shop.css';

function Shop() {
    return (
        <div className="shop-container">
            <h2>Welcome to the Pokemon World Shop!</h2>
            <p>Here, you can find all sorts of Pokemon merchandise to show off your love for the franchise. From
                plushies to keychains to clothing and accessories, we have something for everyone.</p>
            <h3>Featured Items</h3>
            <ul>
                <li>
                    <img src={guy} alt="Item 1"/>
                    <h4>Pikachu Suite</h4>
                    <p>200 DKK</p>
                    <button>Add to Cart</button>
                </li>
                <li>
                    <img src={keychain} alt="Item 2"/>
                    <h4>Pokeball Keychain</h4>
                    <p>80 DKK</p>
                    <button>Add to Cart</button>
                </li>
                <li>
                    <img src={backpack} alt="Item 3"/>
                    <h4>Pokemon Trainer Backpack</h4>
                    <p>750 DKK</p>
                    <button>Add to Cart</button>
                </li>
            </ul>
        </div>
    );
}

export default Shop;