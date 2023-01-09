import React, { useState } from "react";

const Carrousel = ({idLogement}) => {

  // Définir l'état local avec l'image actuellement affichée et le tableau d'images
  const [currentImage, setCurrentImage] = useState(0);
  const [images] = useState(idLogement);

  const length = idLogement.length

  // Méthode de gestion de clic pour changer l'image affichée
  function handleClick(direction) {
    if (direction === "prev") {
      // Si l'image actuelle est la première, passer à la dernière
      if (currentImage === 0) {
        setCurrentImage(length - 1);
      } else {
        setCurrentImage(currentImage - 1);
      }
    } else if (direction === "next") {
      // Si l'image actuelle est la dernière, passer à la première
      if (currentImage === length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }
  }


  return (
    <div className="carousel">
      {/* Bouton "Précédent" */}
      <button onClick={() => handleClick("prev")}>Précédent</button>
      {/* Image actuelle */}
      <img src={images[currentImage]} alt="intèrieur du logement" />
      {/* Bouton "Suivant" */}
      <button onClick={() => handleClick("next")}>Suivant</button>
    </div>
  );
}

export default Carrousel