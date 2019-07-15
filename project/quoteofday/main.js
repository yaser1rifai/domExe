
import { quotes } from './modules.js';


function add() {


  var sourceLength = quotes.length;
  var randomNumber = Math.floor(Math.random() * sourceLength);
  //set a new quote
  for (let i = 0; i <= sourceLength; i += 1) {
    var newQuoteText = quotes[randomNumber];
    document.getElementById("idQuote").innerHTML = newQuoteText;
    console.log('works')
  }
  //  document.getElementById("idQuote").innerHTML=newQuoteText;
 // return false;
}


let input = document.querySelector('#quoteButton');

input.addEventListener('click', (e)  => {
  e.preventDefault();
  add();
});