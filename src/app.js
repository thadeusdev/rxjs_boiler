import $ from 'jquery';
import Rx from 'rxjs/Rx';

// Create a simple array of numbers
const numbers = [33, 44, 55, 66, 77];

// Create observable sequence from this numbers
const numbers$ = Rx.Observable.from(numbers);

// Subscribe to this observable
numbers$.subscribe(
    v => {
        console.log(v);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }
);

const posts = [
  { title: 'Post One', body: 'This is the body' },
  { title: 'Post Two', body: 'This is the body' },
  { title: 'Post Three', body: 'This is the body' },
];

const posts$ = Rx.Observable.from(posts);

posts$.subscribe(
    // v => {
    //     console.log(v);
    // },
    post => {
        console.log(post);
        $('#posts').append('<li><h3>'+post.title+'</h3><p>'+post.body+'</p></li>');
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }
)

// sets
const set = new Set(['Hello', 44, {title: 'My Title'}]);

const set$ = Rx.Observable.from(set);

set$.subscribe(
  (v) => {
    console.log(v);
  },
  (err) => {
    console.log(err);
  },
  (complete) => {
    console.log('completed');
  }
);

// maps - array of key value pairs
const map = new Map([
  [1, 2],
  [3, 4],
  [5, 6],
]);

const map$ = Rx.Observable.from(map);

map$.subscribe(
  (v) => {
    console.log(v);
  },
  (err) => {
    console.log(err);
  },
  (complete) => {
    console.log('completed');
  }
);