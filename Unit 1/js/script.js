/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "The purpose of our lives is to be happy.",
    source: "—Dalai Lama",
    citation: "Best Quotes",
    year: 2018  
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "—Stephen King",
    citation: "Best Quotes",
    year: 2018 
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "—Mae West",
    citation: "Best Quotes",
    year: 2018 
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    source: "—John Lennon",
    citation: "Best Quotes",
    year: 2018 
  },
  {
    quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    source: "—Thomas A. Edison",
    citation: "Best Quotes",
    year: 2018 
  }
];

//The color Array
let colors = ['#FFFACD', '#483D8B', '#EEE8AA','#B8860B', '#000080', '#F5DEB3'];

/***
 * `getRandomColor` function
***/
function getRandomColor (){
  let randCol = colors[Math.floor(Math.random() * colors.length)];
  var x = document.getElementById('quote-box');
  x.style.color = randCol; 
};

/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr){
  let randNum = Math.floor(Math.random() * arr.length);
  let randQuotes = arr[randNum];
  return randQuotes;
}
/***
 * `printQuote` function
***/
function printQuote(){
  let getQuotes = getRandomQuote(quotes);
  let getHTML = `<p class="quote">${getQuotes.quote}</p> 
  <p class="source">${getQuotes.source}`; 
  if (getQuotes.citation) {
    getHTML += `<span class="citation">${getQuotes.citation}</span>`;
  }
  if (getQuotes.year) {
    getHTML += `<span class="year">${getQuotes.year}</span>`;
  }
  getHTML += `</p>`;
  return document.getElementById('quote-box').innerHTML = getHTML;
};

setInterval(() => {
  printQuote();
}, 3000);

setInterval(() => {
  getRandomColor();
}, 3000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);