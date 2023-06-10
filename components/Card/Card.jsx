import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import { addFav, removeFav } from '../Redux/Actions.js'
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
   const {name, status, species, gender, origin, image, id, addFav, removeFav, myFavorites, onClose} = props;

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
     isFav ? removeFav(id) : addFav(props);
     setIsFav(!isFav);
   };
 
   useEffect(() => {
     myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
         setIsFav(true);
       }
     });
   },[myFavorites]);   
   
   return (
     <div className={styles.wrapperCard}>
        <button className={styles.btn} onClick={() => {onClose(id)}}>X</button>
         {isFav ? (
           <button onClick={handleFavorite}>❤️</button>
           ) : (
             <button onClick={handleFavorite}>🤍</button>
             )}

         <img src={image} alt="Characters" />
         <Link strict to={`/detail/${id}`}>
            <h1 className={styles.nombre}>{name}</h1>
         </Link>
            <div className={styles.descripciones}>
               <h2>Estatus: {status}</h2>
               <h2>Especie: {species}</h2>
               <h2>Genero: {gender}</h2>
               <h2>Origen: {origin.name}</h2>
            </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {
       dispatch(addFav(character));
     },
     removeFav: (id) => {
       dispatch(removeFav(id));
     },
   };
 };
 
 const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites,
   };
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);

// onClick={window.alert('Emulamos que se cierra la card')}