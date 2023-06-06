import { interval, scan } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

const btn = document.getElementById('interval');
const rxjsBtn = document.getElementById('rxjs');
const display = document.querySelector('#problem .result');

const people = [
  { name: 'Vladilen', age: 25 },
  { name: 'Elena', age: 17 },
  { name: 'Ivan', age: 18 },
  { name: 'Igor', age: 14 },
  { name: 'Lisa', age: 32 },
  { name: 'Irina', age: 23 },
  { name: 'Oleg', age: 20 },
];

btn.addEventListener('click', () => {
  const canDrink = [];
  let i = 0;

  const someSetInterval = setInterval(() => {
    btn.disabled = true;
    if (people[i]) {
      if (people[i].age >= 18) {
        canDrink.push(people[i].name);
      }
      i += 1;
      display.textContent = canDrink.join(', ');
    } else {
      clearInterval(someSetInterval);
      btn.disabled = false;
    }
  }, 1000);
});

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true;
  interval(1000)
    .pipe(
      take(people.length),
      filter((value1) => people[value1].age >= 18),
      map((value2) => people[value2].name),
      scan((accumulator, value3) => accumulator.concat(value3), []),
    )
    .subscribe(
      (result) => {
        display.textContent = result.join(', ');
      },
      null,
      () => {
        rxjsBtn.disabled = false;
      },
    );
});
