
// Rxjs Operators: Map
// Transform the emitted value based on some logic (this example creates the log of the Observable Number)

const numbers = Rx.Observable.of(10, 100, 1000);

numbers
    .map(num => Math.log(num) )
    .subscribe( x => print(x) )


/* ----------------------------- */


// A more pracical example for app deverlopers is converting an API request JSON sring to javascript object

const jsonString = '{ "type": "Dog", "breed": "Pug" }'
const apiCall = Rx.Observable.of(jsonString);

apiCall
    .map(json => JSON.parse(json) )
    .subscribe( obj => {
        print(obj.type)
        print(obj.breed)
    })


    