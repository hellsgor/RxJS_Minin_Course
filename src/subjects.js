// Subject - по сути, тот же Observable, но позволяет в любой момент испускать новые события
// пример из прошлого модуля с Observable:
/*
  const stream$ = new Observable((observer) => {
    observer.next('first value');

    setTimeout(() => observer.next('After 1000ms'), 1000);
    setTimeout(() => observer.complete(), 1500);
    setTimeout(() => observer.error('Something went wrong'), 2000);
    setTimeout(() => observer.next('After 3000ms'), 3000);
  });
*/
// с Subject дело обстоит немного иначе

import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

const subjectRect = document.getElementById('subject');
const behaviorSubjectRect = document.getElementById('behavior-subject');
const replaySubjectRect = document.getElementById('replay-subject');

subjectRect.addEventListener('click', () => {
  const stream$ = new Subject();

  // сначала подписываемся
  stream$.subscribe((value) => console.log('Value: ', value));

  // потом эмитим события
  stream$.next('hello');
  stream$.next('Rx');
  stream$.next('JS');

  // [Log] Value:  – "hello"
  // [Log] Value:  – "Rx"
  // [Log] Value:  – "JS"
});

// BehaviorSubject
// BehaviorSubject требует начальное значение в конструкторе
behaviorSubjectRect.addEventListener('click', () => {
  const stream$ = new BehaviorSubject('First');

  // сначала подписываемся
  // stream$.subscribe((value) => console.log('Value: ', value));

  // потом эмитим события
  stream$.next('hello');
  stream$.next('Rx');
  stream$.next('JS');

  // [Log] Value:  – "First"
  // [Log] Value:  – "hello"
  // [Log] Value:  – "Rx"
  // [Log] Value:  – "JS"

  stream$.subscribe((value) => console.log('Value: ', value));
  // если подписаться после эмита событий, то получим только значение из последнего события
  // [Log] Value:  – "JS"
});

replaySubjectRect.addEventListener('click', () => {
  const stream$ = new ReplaySubject(2);

  // ReplaySubject - сохраняет все предыдущие значения до момента подписки.
  // Контролировать количество запоминаемых и выводимых значений можно если
  // передать интересующее количество как аргумент в конструктор

  stream$.next('hello');
  stream$.next('Rx');
  stream$.next('JS');

  stream$.subscribe((value) => console.log('Value: ', value));

  // _bufferSize: 1:
  // [Log] Value:  – "JS"

  // _bufferSize: 2:
  // [Log] Value:  – "Rx"
  // [Log] Value:  – "JS"
});
