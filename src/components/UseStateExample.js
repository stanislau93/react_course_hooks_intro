import React, { useState, useEffect } from 'react'

export const UseStateExample = () => {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);

    const onButtonClick = async () => {
        await setLoading(true);

        // sleep
        await new Promise((resolve) => setTimeout(() => resolve(""), 2000))

        await fetch("https://v2.jokeapi.dev/joke/Programming")
        .then(response => response.json())
        .then(jokeObject => {
            setJoke(jokeObject.joke);
            setLoading(false);
        });
    } 
    
    return (
        <React.Fragment>
            <input type="button" value="click to get joke" onClick={onButtonClick} />
            { loading && <p> Loading ... </p> }
            { joke && !loading && <p> Joke: {joke} </p> }
        </React.Fragment>
    );
};