
// Throttle and Debounce Operators
// Used to limit the number of emitted events for rapid streams of observables
// Throttle emits first, then waits the duration befor emitting again
// Debounce is the same as throttle, except it emits the last event and is useful for doing something afer a user has done something, like fill out a form

let mouseEvents = Rx.Observable.fromEvent(document, 'mousemove')

mouseEvents
    .throttleTime(1000)
    .subscribe(e => print(`Throttle: ${e.type}`) )

mouseEvents
    .debounceTime(1000)
    .subscribe(e => print(`Debounce: ${e.type}`) )

