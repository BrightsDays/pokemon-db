import React, { useState } from 'react';
import './main.sass';

const Main = () => {
    const [names, setNames] = useState(null);

    const fetchData = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=100`;
        const settings = { method: "Get" };

        fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                setNames(json.results);
        });
    };

    if (!names) { fetchData(); }

    return(
        <div className="main">
        {names &&
          names.map((name) => {
            const id = name.url.slice(30).replace(/\D+/g, "")

            return (
                <a className="main__card" key={name.name} href="#">
                    <img className="main__image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}/>
                    <p className="main__name">{name.name}</p>
                </a>
            );
          })}
      </div>
    );
};

export default Main;