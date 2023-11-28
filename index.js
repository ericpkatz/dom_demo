const numbersList = document.querySelector('#numbersList');
const oddsList = document.querySelector('#oddsList');

const numbers = [1, 2, 3, 4, 55, 66, 72];

const html = numbers.map(function(num){
  return `<li>${num}</li>`;
}).join('');

numbersList.innerHTML = html;

const odds = numbers.filter(function(num){
  return num % 2 === 1;
});

const oddsHtml = odds.map(function(num){
  return `<li>${num}</li>`;
}).join('');


oddsList.innerHTML = oddsHtml;

