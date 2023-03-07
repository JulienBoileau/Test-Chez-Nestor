import { Link } from 'react-router-dom';
import logementsData from '../data/logementsdata';
import '../styles/style.css'

// Appel de la fonction Home pour l'affichage des 4 logements avec leurs informations basiques (image + titre + prix) récupérés dans le JSON

export default function Home() {
  return (
    <div>
      <h1>Chez Nestor</h1>
        {logementsData.map(logement => (
          <div key={logement.id}>
            <figure>
                <img src={logement.imageURL} alt={logement.altTxt}/>
                <figcaption>
                    <h2>{logement.title}</h2>
                    <p>Prix : {logement.price} €</p>
                    <Link to={`/logementsData/${logement.id}`}>{logement.nom} <strong>Voir plus</strong></Link>
                </figcaption>
            </figure>
          </div>
        ))}
    </div>
  );
}



  




