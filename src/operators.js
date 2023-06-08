import {
  fromEvent, interval, reduce, switchMap, tap,
} from 'rxjs';
import { take } from 'rxjs/operators';

const clicker = document.getElementById('operators-click');

fromEvent(clicker, 'click')
  .pipe(
    switchMap((event) => interval(1000).pipe(
      tap((value) => console.log('Tap: ', value)),
      take(5),
      reduce((acc, value) => acc + value, 0),
    )),
  )
  .subscribe({
    next: (v) => console.log('Next: ', v),
    complete: () => console.log('Complete'),
  });

// const stream$ = interval(1000).pipe(
//   // tap((value) => console.log('Tap: ', value)),
//   // map((value) => value * 3),
//   // filter((value) => value % 2 === 0),
//   take(5),
//   // takeLast(5),
//   // takeWhile((value) => value < 7),
//   // scan((acc, value) => acc + value, 0),
//   reduce((acc, value) => acc + value, 0),
// );
