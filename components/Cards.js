import styles from './Cards.module.css';
function Cards({imageSrc, name, status, species, type, gender, location, id}){
       return(
       <div className={styles.column}>
              <div className={styles.card}>
                     <img src={imageSrc} alt={name} />
                     <h2>{name}</h2>
                     <h3>{status}</h3>
                     <h5>Species : {species}</h5>
                     <h5>Type : {type}</h5>
                     <h5>Gender : {gender}</h5>
                     <h5>Location : {location}</h5>
              </div>
       </div>
       );
}
export default Cards;