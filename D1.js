/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
const testo1 ="String: ammette del testo"
const testo2 ="Number: ammette solo numeri"
const testo3 ="Boolean: ammette solo vero o falso "
const testo4 ="Undefined: variabile non definita"
const testo5 ="Null: assenza volontaria del testo"

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name1 ="Federico"



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 =12
let numero2 =20
console.log(numero1+numero2)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x =12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name1="Capizzi";
console.log(name1)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let x2 =4
console.log(x2-x)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
PS HO MODIFICATO LA TRACCIA PERCHE SUL MIO VS QUANDO FACEVO NAME = CAPIZZI MI COMPARIVA SBARRATO NAME, HO AGIUNTO UN NUMERO 
 Crea due variabili: "name2" e "name3". Assegna a name2 la stringa "john", e assegna a name3 la stringa "John" (con la J maiuscola!).
 Verifica che name2 sia diversa da name3 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name2 ="john"
let name3 ="John"
console.log("name2 è uguale a name4:", name2 === name3);
name2 = name2.toLocaleLowerCase
name3 = name3.toLocaleLowerCase
console.log( name2 === name3)
