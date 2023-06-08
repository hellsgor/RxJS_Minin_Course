import {
  exhaust, from, interval, mapTo, Observable, of, timer,
} from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

const value1 = 1;
const value2 = 2;

const observable = new Observable((observer) => {
  observer.next(value1);
  observer.next(value2);
  observer.complete();
});

// const observer = {
//   next: (value) => console.log(value),
//   error: (error) => console.error(error),
//   complete: () => console.log('Complete'),
// };

// observable.subscribe(observer);

const someTimer1 = new Observable((observer) => {
  let counter = 0;
  const someInterval = setInterval(() => {
    counter += 1;
    if (counter > 5) {
      clearInterval(interval);
      observer.complete(console.log('Complete'));
    } else observer.next(counter);
  }, 1000);
});
// someTimer1.subscribe({ next: console.log }, { error: '' });

const promise = new Promise((resolve) => {
  resolve(1);
});
const observablePromise = from(promise);
observablePromise.subscribe((value) => console.log('From Promise: ', value));

const someArray = [];
const subscription = interval(1000)
  .pipe(
    filter((value) => value % 2 !== 0),
    map((value) => value * 2),
  )
  .subscribe((value) => someArray.push(value));

setTimeout(() => {
  subscription.unsubscribe();
  console.log(someArray);
}, 5000);

// ============================================================================

// const makeRequest = () => timer(1000).pipe(mapTo('success'));
// timer(0, 1000)
//   .pipe(mergeMap(() => makeRequest()))
//   .subscribe(console.log);

const firstInnerObservable = timer(1000, 1000).pipe(mapTo(1), take(3));
const secondInnerObservable = timer(500).pipe(mapTo(2));

of(firstInnerObservable, secondInnerObservable)
  .pipe(exhaust())
  .subscribe(console.log);
