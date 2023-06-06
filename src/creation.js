// ==================================   of   ====================================

// const streamOf$ = of(1, 2, 3, 4, 5, 6, 7);
// streamOf$.subscribe((value) => console.log(value));
// of - позволяет создавать стримы из любых данных

// ==================================   from   ==================================

// const array$ = from([1, 2, 3, 4]).pipe(
//   scan((acc, value) => acc.concat(value), []),
// );
// array$.subscribe((value) => console.log(value));

/// ==================================   Observable   ==========================

// const stream$ = new Observable((observer) => {
//   observer.next('first value');
//
//   setTimeout(() => observer.next('After 1000ms'), 1000);
//   setTimeout(() => observer.complete(), 1500);
//   setTimeout(() => observer.error('Something went wrong'), 2000);
//   setTimeout(() => observer.next('After 3000ms'), 3000);
// });

// stream$.subscribe(
//   (value) => console.log('Value: ', value),
//   (error) => console.error(error),
//   () => console.log('Complete'),
// );

// альтернативная запись, иногда удобна для использования
// stream$.subscribe({
//   next(val) {
//     console.log(val);
//   },
//   error(err) {
//     console.error(err);
//   },
//   complete() {
//     console.log('Complete');
//   },
// });

/// ==================================   fromEvent   ===========================

// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map((event) => ({
//       x: event.offsetX,
//       y: event.offsetY,
//       ctx: event.target.getContext('2d'),
//     })),
//   )
//   .subscribe((pos) => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2);
//   });
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click');
// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas');
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// });

/// ==================================   interval   ============================

// interval
// const subscription = interval(500).subscribe((value) => console.log(value));
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 4000);

/// ==================================   timer   ===============================

// timer
// import { timer } from 'rxjs';
// timer(2500).subscribe((value) => console.log(value));

/// ==================================   range   ===============================

// range
// import { range } from 'rxjs';
// range(42, 10).subscribe((value) => console.log(value));
