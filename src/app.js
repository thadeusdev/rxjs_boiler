import $ from 'jquery';
import Rx from 'rxjs/Rx';

/*
// Interval
const source$ = Rx.Observable.interval(1000).take(5);

source$.subscribe(
    x => {
        console.log(x);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }
);
*/

/*
// Timer
const source$ = Rx.Observable.timer(5000, 2000).take(5);

source$.subscribe(
    x => {
        console.log(x);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }
)
*/

// Range
const source$ = Rx.Observable.range(25, 100);

source$.subscribe(
    x => {
        console.log(x);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }
)