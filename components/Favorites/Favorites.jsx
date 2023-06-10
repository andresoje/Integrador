import React, { useState } from "react";
import styles from "./Favorites.module.css";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../Redux/Actions";

const Favorites = (props) => {
  const {myFavorites} = props;
  const dispach = useDispatch();
  const [aux, setAux] = useState(false)
    
  const handleOrder = (e) => {
    dispach(orderCards(e.target.value))
    setAux(!aux);
  }

  const handleFilter = (e) => {
    dispach(filterCards(e.target.value))
  }

  
  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="B">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {myFavorites &&
        myFavorites.map((char) => {
          return (
            <>
              <Card
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                origin={char.origin}
                image={char.image}
                onClose={props.onClose}
              />
            </>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);