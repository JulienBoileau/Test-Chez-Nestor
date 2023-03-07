import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

// Appel de la fonction logement pour l'affichage des informations plus détaillées (description en plus) du logement sélectionné

export default function Logement({ logement }) {
  return (
    <div>
      <img className='logementimg' src={logement.imageURL} alt={logement.altTxt}/>
      <div className='logementdetails'>
        <h2>{logement.title}</h2>
        <p>{logement.description}</p>
        <p>Prix : {logement.price} €</p>
        <Link to="/"><strong>Retour page d'accueil</strong></Link>
      </div>
    </div>
  );
}
