

/*opgave 1 plus minus*/
let myButtonValueByMariePierreLessard = 0;
//feltet der vises resultat i

/* addButton and subtractButton are the + and - buttons, and buttonResult is the h4 text that gets replaced  */
const myButtonResultByMariePierreLessard = document.getElementById('buttonResult');
const myAddButtonByMariePierreLessard = document.getElementById('addButton');
const mySubButtonByMariePierreLessard = document.getElementById('subtractButton');


// skriv din eventhandler kode her ---------------------------------------

/* Student's note: this event-handler code plus the teacher's code for named functions creates a "callback." */
myAddButtonByMariePierreLessard.addEventListener('click', addValue);
mySubButtonByMariePierreLessard.addEventListener('click', subtractValue);

//-------------------------------------------------------------------------

// named functions du kan kalde fra eventhandlers
/* In showResult('værdi: ' + myButtonValue, myButtonResult), myButtonResult is the element in which the result is shown. 
The result takes the form of the text værdi: followed by the equation's result (showResult = what, where). */
function subtractValue() {
 
    myButtonValueByMariePierreLessard = myButtonValueByMariePierreLessard - 1;

    showResult('værdi: ' + myButtonValueByMariePierreLessard, myButtonResultByMariePierreLessard)
}


function addValue() {
 
    myButtonValueByMariePierreLessard = myButtonValueByMariePierreLessard + 1;

    showResult('værdi: ' + myButtonValueByMariePierreLessard, myButtonResultByMariePierreLessard)
}






/* opgave 2 dice*/
/* diceResult is the h3 where the result gets shown; rollDiceOne is the button */
const myDiceResByMariePierreLessard = document.getElementById('diceResult');
const diceButtonByMariePierreLessard = document.getElementById('rollDiceOne');



  
    /* disse to liner skal afvikles i en arrow funktion bundet til en eventhandler på diceButton
    let diceRoll = getRandomNumber(1, 6);
    showResult(diceRoll, myDiceRes) */

// skriv din eventhandler kode her ---------------------------------------

diceButtonByMariePierreLessard.addEventListener('click', ()=> {
    let diceRollByMariePierreLessard = getRandomNumber(1, 6);
    /* diceRoll is the variable that corresponds to a random number, and myDiceRes is the element where the result gets displayed */
    showResult(diceRollByMariePierreLessard, myDiceResByMariePierreLessard);
  });

//-------------------------------------------------------------------------









/* opgave 3 key event */

/* myLiveText is the input element, and typedResult is the h3 text that gets replaced  */
const myLiveTextByMariePierreLessard = document.getElementById('myLiveText');
let myLiveTextResultByMariePierreLessard = document.getElementById('typedResult');

// skriv din eventhandler kode her ---------------------------------------

/* Student's note: myLiveText is the input element; myLiveTextResult is the id of the h3 above. */

myLiveTextByMariePierreLessard.addEventListener('keyup', function() {
    showResult(myLiveTextByMariePierreLessard.value, myLiveTextResultByMariePierreLessard);
});

//-------------------------------------------------------------------------








/* view code  DO NOT FIDDLE WIT THIS CODE*/
/* viser data i et DOM element, kræver to parametre: data til at vise og elementet det skal vises i.*/
function showResult(myData, myElement) {
    myElement.innerHTML = myData;
}


/* support functions-------------------------------------------------------------------------------*/

/* random function. skal bruge en min værdi og en max værdi.
returnerer et tilfældigt tal mellem min og max værdierne*/

function getRandomNumber(min, max) {
    let myMin = Math.ceil(min);
    let myMax = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

