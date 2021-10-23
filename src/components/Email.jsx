import React from "react"

const Email = (prenom,nom) => {

  return (
    <a className ="ui primary button" href={`mailto:${prenom.toLowerCase()}.${nom.toLowerCase()}@gmail.com`}>Envoyer un message</a>
  );
}

export default Email