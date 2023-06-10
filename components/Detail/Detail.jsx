import React from "react";
import styles from './Detail.module.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = ({onSearch}) => {
    const { id }= useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     return (
        <div className={styles.tarjeta}>
            {character?.name && (
            <div>
                <img src={character.image} alt="Characters" />
                <h1>Status {character.status}</h1>
                <h1>species {character.species}</h1>
                <h1>gender {character.gender}</h1>
                <h1>origin {character.origin.name}</h1>
            </div>)}
        </div>
    );
};

export default Detail;