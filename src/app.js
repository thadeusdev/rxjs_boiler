import $ from 'jquery';
import Rx from 'rxjs/Rx';

// create a variable for that button
const btn = $('#btn');
const input = $('#input');
const output = $('#output');

// create a varible for the observable and/or stream
const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

// lets subscribe to our observable
btnStream$.subscribe(
    function(e){
        // console.log("clicked");
        // console.log(e);
        console.log(e.target.innerHTML);
    },
    function(err){
        console.log(err);
    },
    function(){
        console.log("completed");
    }
);

// create a varible for the observable and/or stream
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

// lets subscribe to our observable
inputStream$.subscribe(
    function(e){
        // console.log(e);
        console.log(e.target.value);
        output.append(e.target.value)
    },
    function(err){
        console.log(err);
    },
    function(){
        console.log("completed");
    }
);

// create a varible for the observable and/or stream
// mouse move stream - we use document so that it worked on entire screen
const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

// lets subscribe to our observable
moveStream$.subscribe(
    function(e){
        // console.log(e);
        console.log(e.target.value);
        // output.append('X: '+e.clientX+' Y: '+e.clientY);
        // output.html('X: ' + e.clientX + ' Y: ' + e.clientY);
        output.html('<h1>X: ' + e.clientX + ' Y: ' + e.clientY + '</h1>');
    },
    function(err){
        console.log(err);
    },
    function(){
        console.log("completed");
    }
);