'use strict';

console.log('funguju!');

const inputElm = document.querySelector('.time-input'); //vybírám pole, kam uživatel zadá číslo
const alarmElm = document.querySelector('.alarm__seconds') //vybírám pole, kam se propisuje čas

const alarmStart = (event) => {

  let time = Number(inputElm.value); //převádím vzniklý řetězec na číslo a ukládám do proměnné time
  alarmElm.textContent = time;
  
  const countdown = () => {
    time = time - 1;
    if (time === 0) {
	  console.log('ringing...');
	  // add ringing class
	  document.querySelector('.alarm').classList.add('alarm--ring');
      clearInterval(timerId);
    };
  }

  const timerId = setInterval(countdown, 1000);
  
}

document.querySelector('button').addEventListener('click', alarmStart);



