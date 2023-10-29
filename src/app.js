import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source$ = new Rx.Observable(
    observer => {
        console.log('creating observable');

        // to emit a value
        observer.next('Hello World');
        observer.next('Another Value');

        // lets do error
        observer.error(new Error('Error: something went wrong'));

        // lets do a timeout
        setTimeout(() => {
            observer.next('Yet another value');

            // incase we want to receive completed message
            observer.complete();
        }, 3000);
    }
);

source$
// making error user/more friendly
.catch(err => Rx.Observable.of(err))
.subscribe(
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