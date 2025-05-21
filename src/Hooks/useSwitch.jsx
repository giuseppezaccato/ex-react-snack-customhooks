import { useState } from "react";

export default function useSwitch(initialValue = false) {

    const [isOn, setIsOn] = useState(initialValue)

    const toggle = () => {

        if (isOn) {
            return setIsOn(initialValue)
        } else {
            return setIsOn(true)
        }

        // bastava un confronto col suo contrario
        // `setIsOn(curr => !curr)` 
    }

    return [isOn, toggle]
    //! qui potevo esportare anche un oggetto {isOn, toggle} 
}

//?ARRAY=> return [isOn, toggle]
//*Ordinamento importante: devi ricordare la posizione degli elementi nell'array.
// più compatto, utile per convenzioni come `useState`.

//?OGGETTO=> return {isOn, toggle}
//*Ordinamento non importante: puoi accedere alle proprietà per nome, quindi è più leggibile e meno soggetto a errori se aggiungi altre proprietà in futuro.
// più leggibile, scalabile e chiaro, soprattutto se il custom hook restituisce più valori.

