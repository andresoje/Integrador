import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const {characters, onClose} = props; 
   return <div className={styles.mainDiv}>
      {characters.map((item) => {
         return(
            <Card
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            gender={item.gender}
            origin={item.origin}
            image={item.image}
            onClose={onClose}
            />
         )
      })}
   </div>;
}
