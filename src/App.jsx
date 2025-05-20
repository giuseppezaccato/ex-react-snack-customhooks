/*
task🏆 Snack 1: useSwitch() – Toggle Booleano
Creare un custom hook per alternare un valore booleano tra true e false.

Cosa deve fare?
- Inizialmente false.
- Ritorna il valore attuale e una funzione toggle() per cambiarlo.
- Quando toggle() viene chiamato, il valore passa da true → false e viceversa.

task🏆 Snack 2: useDate() – Ottenere la Data Attuale
Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

Cosa deve fare?
- Restituisce un oggetto con data e ora formattata.
- Si aggiorna automaticamente ogni secondo.
- Usa useEffect() per gestire l'aggiornamento.

task🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

Cosa deve fare?
- Prende in input una stringa o un JSX component (es. un'emoji, un'icona, un'animazione).
- Posiziona il componente al posto del puntatore del mouse.
- Il componente segue i movimenti del mouse.

task🎯 Bonus: useKeyPress() – Rilevare un Tasto Premuto
Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.

Cosa deve fare?
- Prende in input il nome di un tasto ("Enter", "Escape", ecc.).
- Ritorna true quando il tasto è premuto e false quando viene rilasciato.
- Usa event listener su keydown e keyup.
*/
//task customHooks
import useDate from "./Hooks/useDate"
import useSwitch from "./Hooks/useSwitch"





function App() {
  //snack1
  const [isOn, toggle] = useSwitch(false)

  //snack2
  const currentDate = useDate()


  return (
    <>
      {/* snack 1 */}
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      {/* snack 2 */}
      <div>
        <h1>Data e ora attuali:</h1>
        {/* <p>{currentDate.toLocaleString()}</p> */}
      </div>



    </>
  )
}

export default App
